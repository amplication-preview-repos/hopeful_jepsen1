import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { Share } from "../share/Share";
import { User } from "../user/User";

export type Recipe = {
  comments?: Array<Comment>;
  cookingTime: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  ingredients: string | null;
  instructions: string | null;
  isPublished: boolean | null;
  likes?: Array<Like>;
  preparationTime: number | null;
  servings: number | null;
  shares?: Array<Share>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
  video: JsonValue;
};
