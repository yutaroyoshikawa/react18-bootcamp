import type { FC } from "react";
import { useState } from "react";
import { dummyCommunity } from "../../../testdata/community";
import { dummyCommunityEvent } from "../../../testdata/communityEvent";
import { BaseLayout } from "../../features/app/components/BaseLayout";
import { Button } from "../../features/app/components/Button";
import { Heading } from "../../features/app/components/Heading";
import { Image } from "../../features/app/components/Image";
import { CommunityDetails } from "../../features/community/components/CommunityDetails";
import { CommunityEventSummary } from "../../features/communityEvent/components/CommunityEventSummary";
import { CreateCommunityEventFormModal } from "../../features/communityEvent/components/CreateCommunityEventFormModal";
import { css, theme } from "../../lib/style";

export const CommunityDetailPage: FC = () => {
  return (
    <BaseLayout
      breakpoints={{
        layout: {
          lg: "horizontal",
          md: "vertical",
          sm: "vertical",
        },
      }}
    >
      <CommunityDetailPageContent />
    </BaseLayout>
  );
};

const community = dummyCommunity();
const communityEvent = dummyCommunityEvent();

const CommunityDetailPageContent: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className={containerStyle()}>
        <section className={detailsHeaderStyle()}>
          <Heading
            tag="h1"
            variant="light"
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            {community.name}
          </Heading>
          <Button
            variant="primary"
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
            onClick={() => setIsOpenModal(true)}
          >
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
          <Heading
            tag="h2"
            variant="light"
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            開催イベント一覧
          </Heading>
          <CommunityEventSummary communityEvent={communityEvent} />
        </section>
      </div>
      <CreateCommunityEventFormModal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
      />
    </>
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
