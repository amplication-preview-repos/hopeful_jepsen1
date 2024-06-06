import { Module } from "@nestjs/common";
import { ChallengeModuleBase } from "./base/challenge.module.base";
import { ChallengeService } from "./challenge.service";
import { ChallengeController } from "./challenge.controller";
import { ChallengeResolver } from "./challenge.resolver";

@Module({
  imports: [ChallengeModuleBase],
  controllers: [ChallengeController],
  providers: [ChallengeService, ChallengeResolver],
  exports: [ChallengeService],
})
export class ChallengeModule {}
