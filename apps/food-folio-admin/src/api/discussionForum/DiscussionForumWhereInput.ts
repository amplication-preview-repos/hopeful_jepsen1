import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DiscussionForumWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
