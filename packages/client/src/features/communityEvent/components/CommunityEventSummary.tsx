import type { FC } from "react";
import { css, theme } from "../../../lib/style";
import { Heading } from "../../app/components/Heading";
import { Image } from "../../app/components/Image";

type CommunityEventSummaryProps = {
  communityEvent: {
    name: string;
    details: string;
    imageUrl: string;
    holdAt: number;
  };
};

export const CommunityEventSummary: FC<CommunityEventSummaryProps> = ({
  communityEvent,
}) => {
  return (
    <article className={containerStyle()}>
      <figure className={sumbnailWrapperStyle()}>
        <Image src={communityEvent.imageUrl} alt="" width={696} height={108} />
      </figure>
      <div className={infoWrapperStyle()}>
        <div>
          <Heading tag="h2" variant="light">
            {communityEvent.name}
          </Heading>
          <time className={holdAtTextStyle()}>
            開催日: {new Date(communityEvent.holdAt).toString()}
          </time>
        </div>
        <p className={detailsTextStyle()}>{communityEvent.details}</p>
        <details className={commentsToggleStyle()}>
          <summary className={commentsToggleSummaryStyle()}>
            コメントを見る
          </summary>
          <p>コメント</p>
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
});
