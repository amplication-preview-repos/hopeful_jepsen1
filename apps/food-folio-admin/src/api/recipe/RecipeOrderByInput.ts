import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  cookingTime?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  ingredients?: SortOrder;
  instructions?: SortOrder;
  isPublished?: SortOrder;
  preparationTime?: SortOrder;
  servings?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  video?: SortOrder;
};
