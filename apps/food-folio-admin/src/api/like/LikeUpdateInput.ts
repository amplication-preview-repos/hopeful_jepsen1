import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  recipe?: RecipeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
