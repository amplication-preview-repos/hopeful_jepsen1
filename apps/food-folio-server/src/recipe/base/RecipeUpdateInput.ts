/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentUpdateManyWithoutRecipesInput } from "./CommentUpdateManyWithoutRecipesInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutRecipesInput } from "./LikeUpdateManyWithoutRecipesInput";
import { ShareUpdateManyWithoutRecipesInput } from "./ShareUpdateManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class RecipeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutRecipesInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutRecipesInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutRecipesInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutRecipesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cookingTime?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  image?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ingredients?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  instructions?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPublished?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => LikeUpdateManyWithoutRecipesInput,
  })
  @ValidateNested()
  @Type(() => LikeUpdateManyWithoutRecipesInput)
  @IsOptional()
  @Field(() => LikeUpdateManyWithoutRecipesInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutRecipesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  preparationTime?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  servings?: number | null;

  @ApiProperty({
    required: false,
    type: () => ShareUpdateManyWithoutRecipesInput,
  })
  @ValidateNested()
  @Type(() => ShareUpdateManyWithoutRecipesInput)
  @IsOptional()
  @Field(() => ShareUpdateManyWithoutRecipesInput, {
    nullable: true,
  })
  shares?: ShareUpdateManyWithoutRecipesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  video?: InputJsonValue;
}

export { RecipeUpdateInput as RecipeUpdateInput };
