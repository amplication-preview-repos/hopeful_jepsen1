import { User } from "../user/User";

export type LiveSession = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
