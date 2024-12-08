import { Test, TestingModule } from '@nestjs/testing';
import { GrantApplicationsResolver } from './grant-applications.resolver';

describe('GrantApplicationsResolver', () => {
  let resolver: GrantApplicationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrantApplicationsResolver],
    }).compile();

    resolver = module.get<GrantApplicationsResolver>(GrantApplicationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
