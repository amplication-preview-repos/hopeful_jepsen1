import { ChallengeUpdateManyWithoutUsersInput } from "./ChallengeUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { DiscussionForumUpdateManyWithoutUsersInput } from "./DiscussionForumUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { LiveSessionUpdateManyWithoutUsersInput } from "./LiveSessionUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { RecipeUpdateManyWithoutUsersInput } from "./RecipeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ShareUpdateManyWithoutUsersInput } from "./ShareUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  challenges?: ChallengeUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  discussionForums?: DiscussionForumUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  liveSessions?: LiveSessionUpdateManyWithoutUsersInput;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  recipes?: RecipeUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  shares?: ShareUpdateManyWithoutUsersInput;
  username?: string;
};
