import { Module } from "@nestjs/common";
import { RecipeModule } from "./recipe/recipe.module";
import { CategoryModule } from "./category/category.module";
import { LikeModule } from "./like/like.module";
import { CommentModule } from "./comment/comment.module";
import { DiscussionForumModule } from "./discussionForum/discussionForum.module";
import { LiveSessionModule } from "./liveSession/liveSession.module";
import { ShareModule } from "./share/share.module";
import { PostModule } from "./post/post.module";
import { ChallengeModule } from "./challenge/challenge.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    RecipeModule,
    CategoryModule,
    LikeModule,
    CommentModule,
    DiscussionForumModule,
    LiveSessionModule,
    ShareModule,
    PostModule,
    ChallengeModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
