import { Module } from '@nestjs/common';
import { CacheModule } from '@/common/service/cache/cache.module';
import { EnvModule } from '@/common/service/env/env.module';
import { PubSubModule } from '@/common/service/pubsub/pubsub.module';
import { GraphQLConfigModule } from '@/config/graphql/graphql-config.module';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { Modules } from '@/module';

@Module({
  imports: [EnvModule, GraphQLConfigModule, PrismaModule, CacheModule, PubSubModule, ...Modules],
})
export class AppModule {}
