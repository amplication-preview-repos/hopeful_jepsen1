import { SortOrder } from "../../util/SortOrder";

export type LiveSessionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
