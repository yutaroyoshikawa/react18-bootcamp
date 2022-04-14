import type { FC } from "react";
import { Suspense, useMemo, useState } from "react";
import { BaseLayout } from "../features/app/components/BaseLayout";
import { Button } from "../features/app/components/Button";
import { Heading } from "../features/app/components/Heading";
import { useTheme } from "../features/app/modules/themeHooks";
import { CommunitySummary } from "../features/community/components/CommunitySummary";
import { CommunitySummarySkeleton } from "../features/community/components/CommunitySummarySkeleton";
import { CreateCommunityFormModal } from "../features/community/components/CreateCommunityFormModal";
import { SearchCommunityForm } from "../features/community/components/SearchCommunityForm";
import { useCommunities } from "../features/community/modules/communityHooks";
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
            onClickSearch={(keyword) => console.log(keyword)}
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
          <CommunityList />
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

const CommunityList: FC = () => {
  const { data } = useCommunities({ requestSize: 5 });

  const communities = useMemo(() => {
    if (!data) {
      return [];
    }

    const replaceImageSize = (imageUrl: string) => {
      const replacedWidth = imageUrl.replace("{width}", "130");
      const replacedWidthAndHeight = replacedWidth.replace("{height}", "240");

      return replacedWidthAndHeight;
    };

    return data.flatMap(({ communities }) =>
      communities.map((communityInfo) => ({
        ...communityInfo,
        community: {
          ...communityInfo.community,
          imageUrl: replaceImageSize(communityInfo.community.imageUrl),
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
