import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { ShareListRelationFilter } from "../share/ShareListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeWhereInput = {
  comments?: CommentListRelationFilter;
  cookingTime?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  ingredients?: StringNullableFilter;
  instructions?: StringNullableFilter;
  isPublished?: BooleanNullableFilter;
  likes?: LikeListRelationFilter;
  preparationTime?: IntNullableFilter;
  servings?: IntNullableFilter;
  shares?: ShareListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  video?: JsonFilter;
};
