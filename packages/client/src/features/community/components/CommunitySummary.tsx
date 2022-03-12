import type { community } from "api-server";
import type { FC } from "react";
import { css, theme } from "../../../lib/style";
import { Button } from "../../app/components/Button";
import { Heading } from "../../app/components/Heading";
import { Image } from "../../app/components/Image";
import { categoryNames } from "../modules/communityUtils";

type CommunitySummaryProps = {
  community: community & { thumbnailUrl: string };
  layout: "vertical" | "horizontal";
};

export const CommunitySummary: FC<CommunitySummaryProps> = ({ community }) => {
  return (
    <article className={containerStyle()}>
      <figure className={sumbnailWrapperStyle()}>
        <Image
          src={community.thumbnailUrl}
          alt={community.name}
          width={130}
          height={240}
        />
      </figure>
      <div className={detailsStyle()}>
        <div>
          <Heading tag="h2" variant="light">
            {community.name}
          </Heading>
          <span className={categoryStyle()}>
            {categoryNames[community.category]}
          </span>
          <p className={paragraphStyle()}>{community.details}</p>
        </div>
        <div className={funcStyle()}>
          <Button variant="primary" size="default">
            参加する
          </Button>
        </div>
      </div>
    </article>
  );
};

const sumbnailWrapperStyle = css({
  margin: 0,
});

const containerStyle = css({
  width: "100%",
  minWidth: "500px",
  height: "240px",
  backgroundColor: theme(({ colors }) => colors.backgroundBase),
  borderRadius: theme(({ radii }) => radii.radius1),
  boxShadow: theme(({ shadows }) => shadows.elevationLow),
  boxSizing: "border-box",
  display: "flex",
  overflow: "hidden",
});

const detailsStyle = css({
  width: "100%",
  padding: `${theme(({ space }) => space[3])} ${theme(
    ({ space }) => space[3]
  )} ${theme(({ space }) => space[3])} ${theme(({ space }) => space[4])}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const categoryStyle = css({
  color: theme(({ colors }) => colors.accent),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  padding: `${theme(({ space }) => space[1])} 0`,
});

const paragraphStyle = css({
  margin: 0,
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
});

const funcStyle = css({
  display: "flex",
  justifyContent: "flex-end",
});
