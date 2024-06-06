import { Share } from "../share/Share";
import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  shares?: Array<Share>;
  updatedAt: Date;
  user?: User | null;
};
