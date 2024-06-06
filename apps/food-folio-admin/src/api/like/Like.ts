import { Recipe } from "../recipe/Recipe";
import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  recipe?: Recipe | null;
  updatedAt: Date;
  user?: User | null;
};
