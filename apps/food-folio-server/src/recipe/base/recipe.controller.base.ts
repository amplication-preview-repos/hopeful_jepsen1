/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RecipeService } from "../recipe.service";
import { RecipeCreateInput } from "./RecipeCreateInput";
import { Recipe } from "./Recipe";
import { Post } from "../../post/base/Post";
import { RecipeFindManyArgs } from "./RecipeFindManyArgs";
import { RecipeWhereUniqueInput } from "./RecipeWhereUniqueInput";
import { RecipeUpdateInput } from "./RecipeUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { LikeFindManyArgs } from "../../like/base/LikeFindManyArgs";
import { Like } from "../../like/base/Like";
import { LikeWhereUniqueInput } from "../../like/base/LikeWhereUniqueInput";
import { ShareFindManyArgs } from "../../share/base/ShareFindManyArgs";
import { Share } from "../../share/base/Share";
import { ShareWhereUniqueInput } from "../../share/base/ShareWhereUniqueInput";

export class RecipeControllerBase {
  constructor(protected readonly service: RecipeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recipe })
  async createRecipe(@common.Body() data: RecipeCreateInput): Promise<Recipe> {
    return await this.service.createRecipe({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        cookingTime: true,
        createdAt: true,
        description: true,
        id: true,
        image: true,
        ingredients: true,
        instructions: true,
        isPublished: true,
        preparationTime: true,
        servings: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        video: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Recipe] })
  @ApiNestedQuery(RecipeFindManyArgs)
  async recipes(@common.Req() request: Request): Promise<Recipe[]> {
    const args = plainToClass(RecipeFindManyArgs, request.query);
    return this.service.recipes({
      ...args,
      select: {
        cookingTime: true,
        createdAt: true,
        description: true,
        id: true,
        image: true,
        ingredients: true,
        instructions: true,
        isPublished: true,
        preparationTime: true,
        servings: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        video: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async recipe(
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Recipe | null> {
    const result = await this.service.recipe({
      where: params,
      select: {
        cookingTime: true,
        createdAt: true,
        description: true,
        id: true,
        image: true,
        ingredients: true,
        instructions: true,
        isPublished: true,
        preparationTime: true,
        servings: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        video: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Recipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRecipe(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() data: RecipeUpdateInput
  ): Promise<Recipe | null> {
    try {
      return await this.service.updateRecipe({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          cookingTime: true,
          createdAt: true,
          description: true,
          id: true,
          image: true,
          ingredients: true,
          instructions: true,
          isPublished: true,
          preparationTime: true,
          servings: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Recipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRecipe(
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Recipe | null> {
    try {
      return await this.service.deleteRecipe({
        where: params,
        select: {
          cookingTime: true,
          createdAt: true,
          description: true,
          id: true,
          image: true,
          ingredients: true,
          instructions: true,
          isPublished: true,
          preparationTime: true,
          servings: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  async connectComments(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  async updateComments(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  async disconnectComments(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/likes")
  @ApiNestedQuery(LikeFindManyArgs)
  async findLikes(
    @common.Req() request: Request,
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Like[]> {
    const query = plainToClass(LikeFindManyArgs, request.query);
    const results = await this.service.findLikes(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/likes")
  async connectLikes(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        connect: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/likes")
  async updateLikes(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        set: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/likes")
  async disconnectLikes(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        disconnect: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/shares")
  @ApiNestedQuery(ShareFindManyArgs)
  async findShares(
    @common.Req() request: Request,
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Share[]> {
    const query = plainToClass(ShareFindManyArgs, request.query);
    const results = await this.service.findShares(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        post: {
          select: {
            id: true,
          },
        },

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/shares")
  async connectShares(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: ShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shares: {
        connect: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/shares")
  async updateShares(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: ShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shares: {
        set: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/shares")
  async disconnectShares(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: ShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shares: {
        disconnect: body,
      },
    };
    await this.service.updateRecipe({
      where: params,
      data,
      select: { id: true },
    });
  }
}
