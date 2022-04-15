import type { FC } from "react";
import { Suspense, useMemo, useState } from "react";
import { BaseLayout } from "../features/app/components/BaseLayout";
import { Button } from "../features/app/components/Button";
import { Heading } from "../features/app/components/Heading";
import { Icon } from "../features/app/components/Icon";
import { SquareButton } from "../features/app/components/SquareButton";
import { replaceImageSize } from "../features/app/modules/imageUrlUtils";
import { useTheme } from "../features/app/modules/themeHooks";
import { CommunitySummary } from "../features/community/components/CommunitySummary";
import { CommunitySummarySkeleton } from "../features/community/components/CommunitySummarySkeleton";
import { CreateCommunityFormModal } from "../features/community/components/CreateCommunityFormModal";
import { SearchCommunityForm } from "../features/community/components/SearchCommunityForm";
import { useListCommunity } from "../features/community/modules/listCommunityHooks";
import { css, theme } from "../lib/style";

export const Home: FC = () => {
  return (
    <>
      {/* <Helmet title="トップページ" /> */}
      <BaseLayout
        breakpoints={{
          layout: {
            lg: "horizontal",
            md: "vertical",
            sm: "vertical",
          },
        }}
      >
        <PageContent />
      </BaseLayout>
    </>
  );
};

const PageContent: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState<string>();
  const [theme] = useTheme();

  return (
    <>
      <div className={containerStyle()}>
        <div className={titleContainer()}>
          <Heading
            tag="h1"
            variant={theme}
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            コミュニティ
          </Heading>
          <Button
            type="button"
            onClick={() => setIsOpenModal(true)}
            variant="primary"
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            新しいコミュニティを作る
          </Button>
        </div>

        <div className={searchWrapper()}>
          <SearchCommunityForm
            onClickSearch={(keyword) => setSearchKeyword(keyword)}
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          />
        </div>
        <Suspense fallback={<CommunitiListSkeleton />}>
          <CommunityList keyword={searchKeyword} />
        </Suspense>
      </div>
      <CreateCommunityFormModal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
      />
    </>
  );
};

const containerStyle = css({
  width: "100%",
  maxWidth: "710px",
  display: "grid",
  rowGap: theme(({ space }) => space[4]),
  margin: "0 auto",
});

const titleContainer = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const searchWrapper = css({
  position: "sticky",
  top: theme(({ space }) => space[4]),
});

const CommunityList: FC<{ keyword?: string }> = ({ keyword }) => {
  const { data, size, setSize } = useListCommunity({
    requestSize: 5,
    keyword: keyword ? keyword : undefined,
  });

  const communities = useMemo(() => {
    if (!data || !data[size - 1]) {
      return [];
    }

    return data[size - 1].communities.map((communityInfo) => ({
      ...communityInfo,
      community: {
        ...communityInfo.community,
        imageUrl: replaceImageSize({
          imageUrl: communityInfo.community.imageUrl,
          width: 130,
          height: 240,
        }),
      },
    }));
  }, [data, size]);

  const disabledPageFunc = useMemo(() => {
    if (!data || !data[size - 1]) {
      return {
        prev: true,
        next: true,
      };
    }

    return {
      prev: size < 2,
      next: size * 5 >= data[data.length - 1].totalSize,
    };
  }, [data, size]);

  const showPageFunc = useMemo(() => {
    if (!data) {
      return false;
    }

    return data[data.length - 1].totalSize > 5;
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <>
      {communities.map(({ community, isJoined }) => (
        <CommunitySummary
          key={community.id}
          community={community}
          isJoined={!!isJoined}
          breakpoint={{
            layout: {
              lg: "horizontal",
              md: "horizontal",
              sm: "vertical",
            },
          }}
        />
      ))}
      {showPageFunc && (
        <div className={funcWrapperStyle()}>
          <SquareButton
            type="button"
            onClick={() => setSize((prev) => prev - 1)}
            disabled={disabledPageFunc.prev}
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            <Icon icon="arrowLeft" variant="light" size="lg" />
          </SquareButton>
          <SquareButton
            type="button"
            onClick={() => setSize((prev) => prev + 1)}
            disabled={disabledPageFunc.next}
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            <Icon icon="arrowRight" variant="light" size="lg" />
          </SquareButton>
        </div>
      )}
    </>
  );
};

const funcWrapperStyle = css({
  maxWidth: "300px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});

const CommunitiListSkeleton: FC = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, idx) => (
        <CommunitySummarySkeleton
          key={idx}
          breakpoint={{
            layout: {
              lg: "horizontal",
              md: "horizontal",
              sm: "vertical",
            },
          }}
        />
      ))}
    </>
  );
};
