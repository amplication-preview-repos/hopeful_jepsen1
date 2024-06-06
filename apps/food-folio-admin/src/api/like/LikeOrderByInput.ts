import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  recipeId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
