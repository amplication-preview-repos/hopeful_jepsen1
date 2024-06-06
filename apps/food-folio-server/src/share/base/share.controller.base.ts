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
import { ShareService } from "../share.service";
import { ShareCreateInput } from "./ShareCreateInput";
import { Share } from "./Share";
import { Post } from "../../post/base/Post";
import { ShareFindManyArgs } from "./ShareFindManyArgs";
import { ShareWhereUniqueInput } from "./ShareWhereUniqueInput";
import { ShareUpdateInput } from "./ShareUpdateInput";

export class ShareControllerBase {
  constructor(protected readonly service: ShareService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Share })
  async createShare(@common.Body() data: ShareCreateInput): Promise<Share> {
    return await this.service.createShare({
      data: {
        ...data,

        post: data.post
          ? {
              connect: data.post,
            }
          : undefined,

        recipe: data.recipe
          ? {
              connect: data.recipe,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Share] })
  @ApiNestedQuery(ShareFindManyArgs)
  async shares(@common.Req() request: Request): Promise<Share[]> {
    const args = plainToClass(ShareFindManyArgs, request.query);
    return this.service.shares({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Share })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async share(
    @common.Param() params: ShareWhereUniqueInput
  ): Promise<Share | null> {
    const result = await this.service.share({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Share })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateShare(
    @common.Param() params: ShareWhereUniqueInput,
    @common.Body() data: ShareUpdateInput
  ): Promise<Share | null> {
    try {
      return await this.service.updateShare({
        where: params,
        data: {
          ...data,

          post: data.post
            ? {
                connect: data.post,
              }
            : undefined,

          recipe: data.recipe
            ? {
                connect: data.recipe,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Share })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShare(
    @common.Param() params: ShareWhereUniqueInput
  ): Promise<Share | null> {
    try {
      return await this.service.deleteShare({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
