import { Resolver, Query, Args } from '@nestjs/graphql';
import { Grant } from '@prisma/client';
import { GrantsService } from './grants.service';

@Resolver('Grant')
export class GrantsResolver {
  constructor(private readonly grantsService: GrantsService) { }

  @Query('grants')
  async grants(): Promise<Grant[]> {
    return this.grantsService.findAll();
  }

  @Query('grant')
  async grant(@Args('id') id: string): Promise<Grant | null> {
    return this.grantsService.findOne(id);
  }

  @Query('searchGrants')
  async searchGrants(
    @Args('query', { nullable: true }) query?: string,
    @Args('minAmount', { nullable: true }) minAmount?: number,
    @Args('maxAmount', { nullable: true }) maxAmount?: number,
    @Args('deadline', { nullable: true }) deadline?: Date,
  ): Promise<Grant[]> {
    return this.grantsService.searchGrants({
      query,
      minAmount,
      maxAmount,
      deadline,
    });
  }
}
