import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  recipe?: RecipeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
