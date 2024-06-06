/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscussionForumWhereUniqueInput } from "./DiscussionForumWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DiscussionForumUpdateInput } from "./DiscussionForumUpdateInput";

@ArgsType()
class UpdateDiscussionForumArgs {
  @ApiProperty({
    required: true,
    type: () => DiscussionForumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscussionForumWhereUniqueInput)
  @Field(() => DiscussionForumWhereUniqueInput, { nullable: false })
  where!: DiscussionForumWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DiscussionForumUpdateInput,
  })
  @ValidateNested()
  @Type(() => DiscussionForumUpdateInput)
  @Field(() => DiscussionForumUpdateInput, { nullable: false })
  data!: DiscussionForumUpdateInput;
}

export { UpdateDiscussionForumArgs as UpdateDiscussionForumArgs };
