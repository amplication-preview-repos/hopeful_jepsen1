import { SortOrder } from "../../util/SortOrder";

export type ShareOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  recipeId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
