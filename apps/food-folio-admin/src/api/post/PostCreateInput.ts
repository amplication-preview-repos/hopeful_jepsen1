import { ShareCreateNestedManyWithoutPostsInput } from "./ShareCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  shares?: ShareCreateNestedManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
