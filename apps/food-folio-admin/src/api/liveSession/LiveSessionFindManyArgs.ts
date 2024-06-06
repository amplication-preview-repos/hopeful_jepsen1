import { LiveSessionWhereInput } from "./LiveSessionWhereInput";
import { LiveSessionOrderByInput } from "./LiveSessionOrderByInput";

export type LiveSessionFindManyArgs = {
  where?: LiveSessionWhereInput;
  orderBy?: Array<LiveSessionOrderByInput>;
  skip?: number;
  take?: number;
};
