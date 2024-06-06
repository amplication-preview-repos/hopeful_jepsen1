import { User } from "../user/User";

export type Challenge = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  isActive: boolean | null;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
