import { Module } from '@nestjs/common';
import { CacheModule } from '@/cache/cache.module';
import { EnvModule } from '@/config/env/env.module';
import { GraphQLConfigModule } from '@/config/graphql/graphql-config.module';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { Modules } from '@/module';

@Module({
  imports: [EnvModule, GraphQLConfigModule, PrismaModule, CacheModule, ...Modules],
})
export class AppModule {}
