/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DiscussionForum as PrismaDiscussionForum,
  User as PrismaUser,
} from "@prisma/client";

export class DiscussionForumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DiscussionForumCountArgs, "select">
  ): Promise<number> {
    return this.prisma.discussionForum.count(args);
  }

  async discussionForums<T extends Prisma.DiscussionForumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumFindManyArgs>
  ): Promise<PrismaDiscussionForum[]> {
    return this.prisma.discussionForum.findMany<Prisma.DiscussionForumFindManyArgs>(
      args
    );
  }
  async discussionForum<T extends Prisma.DiscussionForumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumFindUniqueArgs>
  ): Promise<PrismaDiscussionForum | null> {
    return this.prisma.discussionForum.findUnique(args);
  }
  async createDiscussionForum<T extends Prisma.DiscussionForumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumCreateArgs>
  ): Promise<PrismaDiscussionForum> {
    return this.prisma.discussionForum.create<T>(args);
  }
  async updateDiscussionForum<T extends Prisma.DiscussionForumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumUpdateArgs>
  ): Promise<PrismaDiscussionForum> {
    return this.prisma.discussionForum.update<T>(args);
  }
  async deleteDiscussionForum<T extends Prisma.DiscussionForumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumDeleteArgs>
  ): Promise<PrismaDiscussionForum> {
    return this.prisma.discussionForum.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.discussionForum
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
