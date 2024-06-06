import { Module } from "@nestjs/common";
import { LiveSessionModuleBase } from "./base/liveSession.module.base";
import { LiveSessionService } from "./liveSession.service";
import { LiveSessionController } from "./liveSession.controller";
import { LiveSessionResolver } from "./liveSession.resolver";

@Module({
  imports: [LiveSessionModuleBase],
  controllers: [LiveSessionController],
  providers: [LiveSessionService, LiveSessionResolver],
  exports: [LiveSessionService],
})
export class LiveSessionModule {}
