import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GrantApplication, User, Grant } from '@prisma/client';
import { UserInteractionStatus, ApplicationStatus } from './types';

@Injectable()
export class GrantApplicationsService {
  constructor(private prisma: PrismaService) { }

  async findGrantOpportunities(
    userId: string,
    status?: UserInteractionStatus,
  ): Promise<GrantApplication[]> {
    return this.prisma.grantApplication.findMany({
      where: {
        userId,
        ...(status && { userStatus: status }),
      },
      include: {
        grant: true,
        user: true,
      },
    });
  }

  async createGrantApplication(
    userId: string,
    grantId: string,
  ): Promise<GrantApplication> {
    return this.prisma.grantApplication.create({
      data: {
        userId,
        grantId,
        userStatus: UserInteractionStatus.PENDING,
      },
      include: {
        grant: true,
        user: true,
      },
    });
  }

  async updateGrantApplication(
    id: string,
    data: {
      userStatus?: UserInteractionStatus;
      applicationStatus?: ApplicationStatus;
      feedback?: string;
    },
  ): Promise<GrantApplication> {
    return this.prisma.grantApplication.update({
      where: { id },
      data: {
        ...(data.userStatus && { userStatus: data.userStatus }),
        ...(data.applicationStatus && { applicationStatus: data.applicationStatus }),
        ...(data.feedback && { feedback: data.feedback }),
      },
      include: {
        grant: true,
        user: true,
      },
    });
  }

  async getUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: userId }
    });
  }

  async getGrant(grantId: string): Promise<Grant> {
    return this.prisma.grant.findUnique({
      where: { id: grantId }
    });
  }
}
