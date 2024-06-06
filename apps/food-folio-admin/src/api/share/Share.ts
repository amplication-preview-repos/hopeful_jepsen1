import { Post } from "../post/Post";
import { Recipe } from "../recipe/Recipe";
import { User } from "../user/User";

export type Share = {
  createdAt: Date;
  id: string;
  post?: Post | null;
  recipe?: Recipe | null;
  updatedAt: Date;
  user?: User | null;
};
