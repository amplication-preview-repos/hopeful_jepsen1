import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShareUpdateInput = {
  post?: PostWhereUniqueInput | null;
  recipe?: RecipeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
