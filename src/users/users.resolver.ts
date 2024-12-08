import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query('users')
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query('user')
  async user(@Args('id', { type: () => String }) id: string): Promise<User | null> {
    return this.usersService.findOne(id);
  }
}
