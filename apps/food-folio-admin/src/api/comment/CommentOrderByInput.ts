import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipeId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
