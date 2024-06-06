import { User } from "../user/User";

export type DiscussionForum = {
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
