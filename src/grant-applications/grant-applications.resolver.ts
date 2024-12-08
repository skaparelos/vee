import { Args, ID, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { GrantApplication, User, Grant } from '@prisma/client';
import { UserInteractionStatus, ApplicationStatus } from './types';
import { GrantApplicationsService } from './grant-applications.service';

@Resolver('GrantApplication')
export class GrantApplicationsResolver {
  constructor(private grantApplicationsService: GrantApplicationsService) { }

  @Query('grantOpportunities')
  async grantOpportunities(
    @Args('userId', { type: () => ID }) userId: string,
    @Args('status', { type: () => UserInteractionStatus, nullable: true }) status?: UserInteractionStatus,
  ): Promise<GrantApplication[]> {
    return this.grantApplicationsService.findGrantOpportunities(userId, status);
  }

  @Mutation('createGrantApplication')
  async createGrantApplication(
    @Args('userId', { type: () => ID }) userId: string,
    @Args('grantId', { type: () => ID }) grantId: string,
  ): Promise<GrantApplication> {
    return this.grantApplicationsService.createGrantApplication(userId, grantId);
  }

  @Mutation('updateGrantApplication')
  async updateGrantApplication(
    @Args('id', { type: () => ID }) id: string,
    @Args('userStatus', { type: () => UserInteractionStatus, nullable: true }) userStatus?: UserInteractionStatus,
    @Args('applicationStatus', { type: () => ApplicationStatus, nullable: true }) applicationStatus?: ApplicationStatus,
    @Args('feedback', { nullable: true }) feedback?: string,
  ): Promise<GrantApplication> {
    return this.grantApplicationsService.updateGrantApplication(id, {
      userStatus,
      applicationStatus,
      feedback,
    });
  }

  @ResolveField('user')
  async getUser(@Parent() grantApplication: GrantApplication): Promise<User> {
    return this.grantApplicationsService.getUser(grantApplication.userId);
  }

  @ResolveField('grant')
  async getGrant(@Parent() grantApplication: GrantApplication): Promise<Grant> {
    return this.grantApplicationsService.getGrant(grantApplication.grantId);
  }
}
