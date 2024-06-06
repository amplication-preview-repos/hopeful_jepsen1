import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { LikeTitle } from "../like/LikeTitle";
import { ShareTitle } from "../share/ShareTitle";
import { UserTitle } from "../user/UserTitle";

export const RecipeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="cookingTime" source="cookingTime" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="ingredients" multiline source="ingredients" />
        <TextInput label="instructions" multiline source="instructions" />
        <BooleanInput label="isPublished" source="isPublished" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="preparationTime"
          source="preparationTime"
        />
        <NumberInput step={1} label="servings" source="servings" />
        <ReferenceArrayInput
          source="shares"
          reference="Share"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShareTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
