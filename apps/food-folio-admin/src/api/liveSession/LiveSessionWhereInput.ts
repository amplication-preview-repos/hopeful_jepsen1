import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LiveSessionWhereInput = {
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
