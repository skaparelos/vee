import { Module } from '@nestjs/common';
import { GrantApplicationsResolver } from './grant-applications.resolver';
import { GrantApplicationsService } from './grant-applications.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [GrantApplicationsResolver, GrantApplicationsService],
  imports: [PrismaModule],
})
export class GrantApplicationsModule { }
