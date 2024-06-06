import * as graphql from "@nestjs/graphql";
import { ChallengeResolverBase } from "./base/challenge.resolver.base";
import { Challenge } from "./base/Challenge";
import { ChallengeService } from "./challenge.service";

@graphql.Resolver(() => Challenge)
export class ChallengeResolver extends ChallengeResolverBase {
  constructor(protected readonly service: ChallengeService) {
    super(service);
  }
}
