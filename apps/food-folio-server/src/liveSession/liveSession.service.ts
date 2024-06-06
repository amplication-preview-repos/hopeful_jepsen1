import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiveSessionServiceBase } from "./base/liveSession.service.base";

@Injectable()
export class LiveSessionService extends LiveSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
