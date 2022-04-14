import type { FC } from "react";
import { Suspense, useMemo, useState } from "react";
import { BaseLayout } from "../features/app/components/BaseLayout";
import { Button } from "../features/app/components/Button";
import { Heading } from "../features/app/components/Heading";
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
  const { data } = useListCommunity({
    requestSize: 5,
    keyword: keyword ? keyword : undefined,
  });

  const communities = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.flatMap(({ communities }) =>
      communities.map((communityInfo) => ({
        ...communityInfo,
        community: {
          ...communityInfo.community,
          imageUrl: replaceImageSize({
            imageUrl: communityInfo.community.imageUrl,
            width: 130,
            height: 240,
          }),
        },
      }))
    );
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
    </>
  );
};

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
