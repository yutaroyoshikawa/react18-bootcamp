import type { FC } from "react";
import { dummyCommunity } from "../../../testdata/community";
import { dummyCommunityEvent } from "../../../testdata/communityEvent";
import { BaseLayout } from "../../features/app/components/BaseLayout";
import { Button } from "../../features/app/components/Button";
import { Heading } from "../../features/app/components/Heading";
import { Image } from "../../features/app/components/Image";
import { CommunityDetails } from "../../features/community/components/CommunityDetails";
import { CommunityEventSummary } from "../../features/communityEvent/components/CommunityEventSummary";
import { css, theme } from "../../lib/style";

export const CommunityDetailPage: FC = () => {
  return (
    <BaseLayout>
      <CommunityDetailPageContent />
    </BaseLayout>
  );
};

const community = dummyCommunity();
const communityEvent = dummyCommunityEvent();

const CommunityDetailPageContent: FC = () => {
  return (
    <div className={containerStyle()}>
      <section className={detailsHeaderStyle()}>
        <Heading tag="h1" variant="light">
          {community.name}
        </Heading>
        <Button variant="primary" size="default">
          新しいイベントを作る
        </Button>
      </section>
      <figure className={sumbnailWrapperStyle()}>
        <Image src={community.imageUrl} alt="" width={696} height={230} />
      </figure>
      <section>
        <CommunityDetails community={community} />
      </section>
      <section>
        <Heading tag="h2" variant="light"></Heading>
        <CommunityEventSummary communityEvent={communityEvent} />
      </section>
    </div>
  );
};

const containerStyle = css({
  width: "100%",
  maxWidth: "700px",
  margin: "0 auto",
  display: "grid",
  rowGap: theme(({ space }) => space[4]),
});

const detailsHeaderStyle = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  columnGap: theme(({ space }) => space[2]),
  alignItems: "center",
});

const sumbnailWrapperStyle = css({
  margin: 0,
  borderRadius: theme(({ radii }) => radii.radius1),
  overflow: "hidden",
});
