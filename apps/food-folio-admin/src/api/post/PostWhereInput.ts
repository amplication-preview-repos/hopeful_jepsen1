import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShareListRelationFilter } from "../share/ShareListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  shares?: ShareListRelationFilter;
  user?: UserWhereUniqueInput;
};
