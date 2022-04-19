import type { CommunityEvent } from "api-server";
import type { FC } from "react";
import { Suspense, useMemo, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { formatDate } from "../../../lib/date";
import { css, theme } from "../../../lib/style";
import { Heading } from "../../app/components/Heading";
import { Image } from "../../app/components/Image";
import { CommunityEventComment } from "../../communityEventComments/components/CommunityEventComment";
import { CommunityEventCommentForm } from "../../communityEventComments/components/CommunityEventCommentForm";
import { useListCommunityEventComment } from "../../communityEventComments/modules/listCommunityEventCommentHooks";

const TRANSITION_TIMEOUT = 300;

type CommunityEventSummaryProps = {
  communityId: string;
  communityEvent: CommunityEvent;
};

export const CommunityEventSummary: FC<CommunityEventSummaryProps> = ({
  communityId,
  communityEvent,
}) => {
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const [showAccordionContents, setShowAccordionContents] = useState(false);
  const holdAt = useMemo(() => {
    return formatDate({
      date: communityEvent.holdAt,
      format: "YYYY/MM/DD HH:mm",
    });
  }, [communityEvent.holdAt]);

  return (
    <article className={containerStyle()}>
      <figure className={sumbnailWrapperStyle()}>
        <Image
          src={communityEvent.imageUrl}
          alt=""
          width={696}
          height={108}
          loading="eager"
          scale="cover"
        />
      </figure>
      <div className={infoWrapperStyle()}>
        <div>
          <Heading
            tag="h3"
            variant="light"
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            {communityEvent.name}
          </Heading>
          <time className={holdAtTextStyle()}>開催日: {holdAt}</time>
        </div>
        <p className={detailsTextStyle()}>{communityEvent.details}</p>
        <details
          className={commentsToggleStyle()}
          onClick={(event) => event.preventDefault()}
          open={isOpenToggle}
        >
          <summary
            className={commentsToggleSummaryStyle()}
            onClick={() => setShowAccordionContents((prev) => !prev)}
          >
            コメントを見る
          </summary>
          <CSSTransition
            in={showAccordionContents}
            timeout={TRANSITION_TIMEOUT}
            onEnter={() => setIsOpenToggle(true)}
            onExited={() => setIsOpenToggle(false)}
          >
            <div className={detailsContentsWrapperStyle()}>
              <CommunityEventCommentForm
                onSubmit={(comment) => console.log(comment)}
              />
              {isOpenToggle && (
                <Suspense fallback={null}>
                  <CommunityEventCommentList
                    communityId={communityId}
                    eventId={communityEvent.id}
                  />
                </Suspense>
              )}
            </div>
          </CSSTransition>
        </details>
      </div>
    </article>
  );
};

const containerStyle = css({
  width: "100%",
  minHeight: "320px",
  borderRadius: theme(({ radii }) => radii.radius1),
  overflow: "hidden",
  boxShadow: theme(({ shadows }) => shadows.elevationLow),
  backgroundColor: theme(({ colors }) => colors.backgroundBase),
});

const sumbnailWrapperStyle = css({
  margin: 0,
});

const infoWrapperStyle = css({
  height: "calc(100% - 108px)",
  padding: `${theme(({ space }) => space[3])} ${theme(
    ({ space }) => space[4]
  )}`,
  boxSizing: "border-box",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  rowGap: theme(({ space }) => space[2]),
});

const holdAtTextStyle = css({
  display: "inline-block",
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
});

const detailsContentsWrapperStyle = css({
  opacity: 0,
  display: "grid",
  rowGap: theme(({ space }) => space[2]),
  transition: `opacity ${TRANSITION_TIMEOUT}ms ease`,
  ["&.enter-active, &.enter-done"]: {
    opacity: 1,
  },
  ["&.exit"]: {
    opacity: 0,
  },
});

const detailsTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  boxSizing: "border-box",
  margin: 0,
});

const commentsToggleStyle = css({
  width: "100%",
});

const commentsToggleSummaryStyle = css({
  textAlign: "center",
  cursor: "pointer",
  padding: `${theme(({ space }) => space[2])} 0`,
});

const CommunityEventCommentList: FC<{
  communityId: string;
  eventId: string;
}> = ({ communityId, eventId }) => {
  const { data, loading } = useListCommunityEventComment({
    communityId,
    eventId,
  });

  if (loading || !data) {
    return null;
  }

  return (
    <ul className={listStyle()}>
      {data.map(({ comment, user }) => (
        <li key={comment.id} className={listItemStyle()}>
          <CommunityEventComment communityEventComment={comment} user={user} />
        </li>
      ))}
    </ul>
  );
};

const listStyle = css({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

const listItemStyle = css({
  margin: 0,
});
