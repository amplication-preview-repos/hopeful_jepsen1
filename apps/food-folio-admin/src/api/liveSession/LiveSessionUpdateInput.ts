import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LiveSessionUpdateInput = {
  description?: string | null;
  endTime?: Date | null;
  startTime?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
