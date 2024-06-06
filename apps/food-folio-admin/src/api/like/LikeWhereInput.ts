import { StringFilter } from "../../util/StringFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  recipe?: RecipeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
