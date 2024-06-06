import { Challenge } from "../challenge/Challenge";
import { Comment } from "../comment/Comment";
import { DiscussionForum } from "../discussionForum/DiscussionForum";
import { Like } from "../like/Like";
import { LiveSession } from "../liveSession/LiveSession";
import { Post } from "../post/Post";
import { Recipe } from "../recipe/Recipe";
import { JsonValue } from "type-fest";
import { Share } from "../share/Share";

export type User = {
  challenges?: Array<Challenge>;
  comments?: Array<Comment>;
  createdAt: Date;
  discussionForums?: Array<DiscussionForum>;
  email: string | null;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  lastName: string | null;
  likes?: Array<Like>;
  liveSessions?: Array<LiveSession>;
  posts?: Array<Post>;
  recipes?: Array<Recipe>;
  roles: JsonValue;
  shares?: Array<Share>;
  updatedAt: Date;
  username: string;
};
