import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShareWhereInput = {
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  recipe?: RecipeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
