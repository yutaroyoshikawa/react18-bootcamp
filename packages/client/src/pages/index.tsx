import type { FC } from "react";
import { useState } from "react";
import { dummyCommunity } from "../../testdata/community";
import { BaseLayout } from "../features/app/components/BaseLayout";
import { Button } from "../features/app/components/Button";
import { Heading } from "../features/app/components/Heading";
import { useTheme } from "../features/app/modules/themeHooks";
import { CommunitySummary } from "../features/community/components/CommunitySummary";
import { CommunitySummarySkeleton } from "../features/community/components/CommunitySummarySkeleton";
import { CreateCommunityFormModal } from "../features/community/components/CreateCommunityFormModal";
import { SearchCommunityForm } from "../features/community/components/SearchCommunityForm";
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

const community = dummyCommunity();

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
        <CommunitySummarySkeleton
          breakpoint={{
            layout: {
              lg: "horizontal",
              md: "horizontal",
              sm: "vertical",
            },
          }}
        />
        {Array.from({ length: 5 }).map((_, idx) => (
          <CommunitySummary
            key={idx}
            community={community}
            isJoined={true}
            breakpoint={{
              layout: {
                lg: "horizontal",
                md: "horizontal",
                sm: "vertical",
              },
            }}
          />
        ))}
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
