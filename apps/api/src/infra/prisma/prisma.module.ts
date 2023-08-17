import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EnvModule } from '@/config/env/env.module';

@Global()
@Module({
  imports: [EnvModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
