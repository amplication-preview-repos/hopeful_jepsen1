import { ChallengeCreateNestedManyWithoutUsersInput } from "./ChallengeCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { DiscussionForumCreateNestedManyWithoutUsersInput } from "./DiscussionForumCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { LiveSessionCreateNestedManyWithoutUsersInput } from "./LiveSessionCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { RecipeCreateNestedManyWithoutUsersInput } from "./RecipeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ShareCreateNestedManyWithoutUsersInput } from "./ShareCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  challenges?: ChallengeCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  discussionForums?: DiscussionForumCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  liveSessions?: LiveSessionCreateNestedManyWithoutUsersInput;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  recipes?: RecipeCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  shares?: ShareCreateNestedManyWithoutUsersInput;
  username: string;
};
