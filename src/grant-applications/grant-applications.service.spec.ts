import { Test, TestingModule } from '@nestjs/testing';
import { GrantApplicationsService } from './grant-applications.service';

describe('GrantApplicationsService', () => {
  let service: GrantApplicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrantApplicationsService],
    }).compile();

    service = module.get<GrantApplicationsService>(GrantApplicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
