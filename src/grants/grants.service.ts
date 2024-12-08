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

  async searchGrants(params: {
    query?: string;
    minAmount?: number;
    maxAmount?: number;
    deadline?: Date;
  }): Promise<Grant[]> {
    const { query, minAmount, maxAmount, deadline } = params;

    return this.prisma.grant.findMany({
      where: {
        AND: [
          query ? { name: { contains: query } } : {},
          minAmount ? { amount: { gte: minAmount } } : {},
          maxAmount ? { amount: { lte: maxAmount } } : {},
          deadline ? { deadline: { lte: deadline } } : {},
        ],
      },
      orderBy: {
        deadline: 'asc',
      },
    });
  }
}
