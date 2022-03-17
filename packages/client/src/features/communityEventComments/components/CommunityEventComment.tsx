import type { FC } from "react";
import { css, theme } from "../../../lib/style";
import { UserAvatar } from "../../user/components/UserAvatar";

type CommunityEventCommnetProps = {
  communityEventComment: {
    comment: string;
    user: {
      name: string;
      imageUrl: string;
    };
    postedAt: number;
  };
};

export const CommunityEventComment: FC<CommunityEventCommnetProps> = ({
  communityEventComment,
}) => {
  return (
    <figure className={containerStyle()}>
      <UserAvatar
        avatarUrl={communityEventComment.user.imageUrl}
        size="small"
      />
      <div className={commentWrapperStyle()}>
        <p className={commentTextStyle()}>{communityEventComment.comment}</p>
        <cite className={userNameTextStyle()}>
          {communityEventComment.user.name}
        </cite>
        <time className={postedAtTextStyle()}>
          {new Date(communityEventComment.postedAt).toString()}
        </time>
      </div>
    </figure>
  );
};

const containerStyle = css({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: theme(({ space }) => space[1]),
  margin: 0,
});

const commentWrapperStyle = css({
  display: "grid",
  gridTemplateAreas: `
    "comment comment"
    "name posted-at"`,
  gap: theme(({ space }) => space[1]),
});

const commentTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
  gridArea: "comment",
});

const userNameTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
  gridArea: "name",
  fontStyle: "normal",
});

const postedAtTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
  gridArea: "posted-at",
});
