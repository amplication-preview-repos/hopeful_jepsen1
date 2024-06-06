import * as graphql from "@nestjs/graphql";
import { LiveSessionResolverBase } from "./base/liveSession.resolver.base";
import { LiveSession } from "./base/LiveSession";
import { LiveSessionService } from "./liveSession.service";

@graphql.Resolver(() => LiveSession)
export class LiveSessionResolver extends LiveSessionResolverBase {
  constructor(protected readonly service: LiveSessionService) {
    super(service);
  }
}
