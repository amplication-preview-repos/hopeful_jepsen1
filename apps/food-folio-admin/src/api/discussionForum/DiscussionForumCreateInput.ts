import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionForumCreateInput = {
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
