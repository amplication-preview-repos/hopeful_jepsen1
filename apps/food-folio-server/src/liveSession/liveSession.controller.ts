import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiveSessionService } from "./liveSession.service";
import { LiveSessionControllerBase } from "./base/liveSession.controller.base";

@swagger.ApiTags("liveSessions")
@common.Controller("liveSessions")
export class LiveSessionController extends LiveSessionControllerBase {
  constructor(protected readonly service: LiveSessionService) {
    super(service);
  }
}
