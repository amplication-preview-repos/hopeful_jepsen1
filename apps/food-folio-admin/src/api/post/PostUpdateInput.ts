import { ShareUpdateManyWithoutPostsInput } from "./ShareUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  shares?: ShareUpdateManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
