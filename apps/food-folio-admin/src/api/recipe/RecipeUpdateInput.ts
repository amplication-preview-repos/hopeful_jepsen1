import { CommentUpdateManyWithoutRecipesInput } from "./CommentUpdateManyWithoutRecipesInput";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutRecipesInput } from "./LikeUpdateManyWithoutRecipesInput";
import { ShareUpdateManyWithoutRecipesInput } from "./ShareUpdateManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeUpdateInput = {
  comments?: CommentUpdateManyWithoutRecipesInput;
  cookingTime?: number | null;
  description?: string | null;
  image?: InputJsonValue;
  ingredients?: string | null;
  instructions?: string | null;
  isPublished?: boolean | null;
  likes?: LikeUpdateManyWithoutRecipesInput;
  preparationTime?: number | null;
  servings?: number | null;
  shares?: ShareUpdateManyWithoutRecipesInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  video?: InputJsonValue;
};
