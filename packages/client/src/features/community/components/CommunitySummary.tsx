import type { Community } from "api-server";
import type { FC } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import { Button } from "../../app/components/Button";
import { Heading } from "../../app/components/Heading";
import { Image } from "../../app/components/Image";
import { Link } from "../../app/components/Link";
import { categoryNames } from "../modules/communityUtils";

type Layout = "vertical" | "horizontal";

type CommunitySummaryProps = {
  community: Community;
  isJoined: boolean;
  breakpoint: {
    layout: {
      lg: Layout;
      md: Layout;
      sm: Layout;
    };
  };
};

const variants = {
  button: {
    horizontal: "default",
    vertical: "small",
  },
} as const;

export const CommunitySummary: FC<CommunitySummaryProps> = ({
  community,
  isJoined,
  breakpoint,
}) => {
  return (
    <article
      className={containerStyle({
        css: {
          ...breakpointsStyle({
            key: "layout",
            style: {
              vertical: {},
              horizontal: {},
            },
          }),
        },
      })}
      {...breakpointAttributes({
        key: "layout",
        breakpoints: breakpoint.layout,
      })}
    >
      <figure
        className={sumbnailWrapperStyle({
          css: {},
        })}
      >
        <Image
          src={community.imageUrl}
          alt={community.name}
          width={130}
          height={240}
        />
      </figure>
      <div className={detailsStyle()}>
        <div className={summaryInfoStyle()}>
          <Heading tag="h2" variant="light">
            {community.name}
          </Heading>
          <span className={categoryStyle()}>
            {categoryNames[community.category]}
          </span>
          <p className={paragraphStyle()}>{community.details}</p>
        </div>
        <div className={funcStyle()}>
          {isJoined ? (
            <Link to={`/communities/${community.id}`}>詳細を見る</Link>
          ) : (
            <Button
              variant="primary"
              breakpoint={{
                size: {
                  lg: variants.button[breakpoint.layout.lg],
                  md: variants.button[breakpoint.layout.md],
                  sm: variants.button[breakpoint.layout.sm],
                },
              }}
            >
              参加する
            </Button>
          )}
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

const summaryInfoStyle = css({
  display: "grid",
  rowGap: theme(({ space }) => space[1]),
});

const categoryStyle = css({
  color: theme(({ colors }) => colors.accent),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
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
