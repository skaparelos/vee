import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/prisma/prisma.service';
import { Grant } from '@prisma/client';

describe('Grants Resolver (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = app.get(PrismaService);
    await app.init();
  });

  // afterEach(async () => {
  //   // Clean up the test data
  //   await prismaService.grant.deleteMany();
  //   await app.close();
  // });

  it('should get a specific grant by id', async () => {
    const grantId = 'grt_id_2'

    const query = `
      query {
        grant(id: "${grantId}") {
          id
          name
          foundationName
          amount
        }
      }
    `;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .expect(response => {
        const fetchedGrant = response.body.data.grant;
        expect(fetchedGrant.id).toEqual(grantId);
        expect(fetchedGrant.name).toEqual('Environmental Innovation Grant');
      });
  });

  it('should get all grants', async () => {

    const query = `
      query {
        grants {
          id
          name
          foundationName
          amount
        }
      }
    `;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .expect(response => {
        const grants = response.body.data.grants;
        expect(grants).toBeInstanceOf(Array);
        expect(grants.length).toEqual(5);
        expect(grants[0].name).toEqual('Community Development Initiative');
      });
  });
});