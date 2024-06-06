import { CommentCreateNestedManyWithoutRecipesInput } from "./CommentCreateNestedManyWithoutRecipesInput";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutRecipesInput } from "./LikeCreateNestedManyWithoutRecipesInput";
import { ShareCreateNestedManyWithoutRecipesInput } from "./ShareCreateNestedManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeCreateInput = {
  comments?: CommentCreateNestedManyWithoutRecipesInput;
  cookingTime?: number | null;
  description?: string | null;
  image?: InputJsonValue;
  ingredients?: string | null;
  instructions?: string | null;
  isPublished?: boolean | null;
  likes?: LikeCreateNestedManyWithoutRecipesInput;
  preparationTime?: number | null;
  servings?: number | null;
  shares?: ShareCreateNestedManyWithoutRecipesInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  video?: InputJsonValue;
};
