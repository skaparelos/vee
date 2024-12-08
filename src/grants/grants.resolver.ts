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
}
