import { CommunityEvent } from "api-server";
import type { FC } from "react";
import { Suspense, useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseLayout } from "../../features/app/components/BaseLayout";
import { Button } from "../../features/app/components/Button";
import { Heading } from "../../features/app/components/Heading";
import { Icon } from "../../features/app/components/Icon";
import { Image } from "../../features/app/components/Image";
import { SquareButton } from "../../features/app/components/SquareButton";
import { replaceImageSize } from "../../features/app/modules/imageUrlUtils";
import { useTheme } from "../../features/app/modules/themeHooks";
import { CommunityDetails } from "../../features/community/components/CommunityDetails";
import { useCommunity } from "../../features/community/modules/communityHooks";
import { CommunityEventSummary } from "../../features/communityEvent/components/CommunityEventSummary";
import { CreateCommunityEventFormModal } from "../../features/communityEvent/components/CreateCommunityEventFormModal";
import {
  useFetchListCommunityEvent,
  useListCommunityEvent,
} from "../../features/communityEvent/modules/communityEventsHooks";
import { useCreateCommunityEvent } from "../../features/communityEvent/modules/createCommunityEventHooks";
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
      <Suspense fallback={null}>
        <CommunityDetailPageContent />
      </Suspense>
    </BaseLayout>
  );
};

const CommunityDetailPageContent: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { id } = useParams();
  const { data } = useCommunity({ communityId: id ?? "" });
  const [theme] = useTheme();
  const { createCommunityEvent } = useCreateCommunityEvent();
  const fetchListCommunityEvent = useFetchListCommunityEvent();

  const thumbnailUrl = useMemo(() => {
    if (typeof data?.community.imageUrl === "undefined") {
      return "";
    }

    return replaceImageSize({
      imageUrl: data.community.imageUrl,
      width: 696,
      height: 230,
    });
  }, [data?.community.imageUrl]);

  const requestCreateEvent = useCallback(
    async ({
      name,
      holdAt,
      details,
      category,
    }: {
      name: string;
      holdAt: Date;
      details: string;
      category: CommunityEvent["category"];
    }) => {
      if (!id) {
        return;
      }

      const res = await createCommunityEvent({
        communityId: id,
        name,
        holdAt,
        details,
        category,
      });

      if (res instanceof Error) {
        return;
      }

      await fetchListCommunityEvent({
        communityId: id,
        requestSize: 5,
        pageIndex: 1,
      });

      setIsOpenModal(false);
    },
    [createCommunityEvent, fetchListCommunityEvent, id]
  );

  if (!data || !id) {
    return null;
  }

  return (
    <>
      <div className={containerStyle()}>
        <section className={detailsHeaderStyle()}>
          <Heading
            tag="h1"
            variant={theme === "light" ? "light" : "dark"}
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            {data.community.name}
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
          <Image src={thumbnailUrl} alt="" width={696} height={230} />
        </figure>
        <section>
          <CommunityDetails community={data.community} />
        </section>
        <section className={eventListWrapperStyle()}>
          <Heading
            tag="h2"
            variant={theme === "light" ? "light" : "dark"}
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
          <Suspense fallback={null}>
            <ListCommunityEvent communityId={id} />
          </Suspense>
        </section>
      </div>
      <CreateCommunityEventFormModal
        isOpen={isOpenModal}
        onRequestCreateEvent={requestCreateEvent}
        onRequestClose={() => setIsOpenModal(false)}
        theme={theme}
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

const eventListWrapperStyle = css({
  display: "grid",
  rowGap: theme(({ space }) => space[3]),
});

const ListCommunityEvent: FC<{ communityId: string }> = ({ communityId }) => {
  const { data, size, setSize } = useListCommunityEvent({
    communityId,
    requestSize: 5,
  });

  const events = useMemo(() => {
    if (!data || !data[size - 1]) {
      return [];
    }

    return data[size - 1].events.map((event) => ({
      ...event,
      communityEvent: {
        ...event.communityEvent,
        imageUrl: replaceImageSize({
          imageUrl: event.communityEvent.imageUrl,
          width: 696,
          height: 108,
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
      <ul className={listStyle()}>
        {events.map(({ communityEvent }) => (
          <li className={listItem()} key={communityEvent.id}>
            <CommunityEventSummary
              communityEvent={communityEvent}
              communityId={communityId}
            />
          </li>
        ))}
      </ul>
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

const listStyle = css({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  rowGap: theme(({ space }) => space[4]),
});

const listItem = css({
  margin: 0,
  padding: 0,
});

const funcWrapperStyle = css({
  maxWidth: "300px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});
