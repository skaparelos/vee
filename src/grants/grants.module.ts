import { Module } from '@nestjs/common';
import { GrantsResolver } from './grants.resolver';
import { GrantsService } from './grants.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [GrantsResolver, GrantsService],
  imports: [PrismaModule],
})
export class GrantsModule { }
