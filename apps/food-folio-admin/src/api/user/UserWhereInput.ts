import { ChallengeListRelationFilter } from "../challenge/ChallengeListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { DiscussionForumListRelationFilter } from "../discussionForum/DiscussionForumListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { LiveSessionListRelationFilter } from "../liveSession/LiveSessionListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";
import { ShareListRelationFilter } from "../share/ShareListRelationFilter";

export type UserWhereInput = {
  challenges?: ChallengeListRelationFilter;
  comments?: CommentListRelationFilter;
  discussionForums?: DiscussionForumListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  liveSessions?: LiveSessionListRelationFilter;
  posts?: PostListRelationFilter;
  recipes?: RecipeListRelationFilter;
  shares?: ShareListRelationFilter;
  username?: StringFilter;
};
