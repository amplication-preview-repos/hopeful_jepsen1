import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChallengeCreateInput = {
  description?: string | null;
  endTime?: Date | null;
  isActive?: boolean | null;
  startTime?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
