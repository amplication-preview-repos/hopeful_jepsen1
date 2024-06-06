import { Recipe } from "../recipe/Recipe";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  recipe?: Recipe | null;
  updatedAt: Date;
  user?: User | null;
};
