import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChallengeService } from "./challenge.service";
import { ChallengeControllerBase } from "./base/challenge.controller.base";

@swagger.ApiTags("challenges")
@common.Controller("challenges")
export class ChallengeController extends ChallengeControllerBase {
  constructor(protected readonly service: ChallengeService) {
    super(service);
  }
}
