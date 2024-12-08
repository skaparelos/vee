import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Grant } from '@prisma/client';

@Injectable()
export class GrantsService {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Grant[]> {
    return this.prisma.grant.findMany();
  }

  async findOne(id: string): Promise<Grant | null> {
    return this.prisma.grant.findUnique({
      where: { id },
    });
  }
}
