import type { FC } from "react";
import { dummyCommunity } from "../../testdata/community";
import { BaseLayout } from "../features/app/components/BaseLayout";
import { Button } from "../features/app/components/Button";
import { Heading } from "../features/app/components/Heading";
import { useTheme } from "../features/app/modules/themeHooks";
import { CommunitySummary } from "../features/community/components/CommunitySummary";
import { SearchCommunityForm } from "../features/community/components/SearchCommunityForm";
import { css, theme } from "../lib/style";

export const Home: FC = () => {
  return (
    <>
      {/* <Helmet title="トップページ" /> */}
      <BaseLayout>
        <PageContent />
      </BaseLayout>
    </>
  );
};

const community = dummyCommunity();

const PageContent: FC = () => {
  const [theme] = useTheme();

  return (
    <div className={containerStyle()}>
      <div className={titleContainer()}>
        <Heading tag="h1" variant={theme}>
          コミュニティ
        </Heading>
        <Button type="button" variant="primary" size="default">
          新しいコミュニティを作る
        </Button>
      </div>

      <div className={searchWrapper()}>
        <SearchCommunityForm
          onClickSearch={(keyword) => console.log(keyword)}
        />
      </div>
      <CommunitySummary
        community={{
          ...community,
          thumbnailUrl: "https://picsum.photos/200/300",
        }}
        layout="vertical"
      />
      <CommunitySummary
        community={{
          ...community,
          thumbnailUrl: "https://picsum.photos/200/300",
        }}
        layout="vertical"
      />
      <CommunitySummary
        community={{
          ...community,
          thumbnailUrl: "https://picsum.photos/200/300",
        }}
        layout="vertical"
      />
      <CommunitySummary
        community={{
          ...community,
          thumbnailUrl: "https://picsum.photos/200/300",
        }}
        layout="vertical"
      />
      <CommunitySummary
        community={{
          ...community,
          thumbnailUrl: "https://picsum.photos/200/300",
        }}
        layout="vertical"
      />
    </div>
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
