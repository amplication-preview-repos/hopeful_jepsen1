import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionForumUpdateInput = {
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
