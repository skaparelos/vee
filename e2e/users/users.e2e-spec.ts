import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/prisma/prisma.service';
import { User } from '@prisma/client';

describe('Users Resolver (e2e)', () => {
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
  //   await prismaService.user.deleteMany();
  //   await app.close();
  // });

  it('should get a specific user by id', async () => {
    const userId = 'usr_id_2'

    const query = `
      query {
        user(id: "${userId}") {
          id
          email
          name
        }
      }
    `;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .expect(response => {
        const fetchedUser = response.body.data.user;
        expect(fetchedUser.id).toEqual(userId);
        expect(fetchedUser.email).toEqual('jane.smith@example.com');
      });
  });

  it('should get all users', async () => {
    const query = `
      query {
        users {
          id
          email
          name
        }
      }
    `;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .expect(response => {
        const users = response.body.data.users;
        expect(users).toBeInstanceOf(Array);
        expect(users.length).toEqual(5);
      });
  });

  it('should get all users', async () => {
    const userId = 'usr_id_2'

    const query = `
      query {
        user(id: "${userId}") {
          id
          email
          name
          userGrants {
            grant {
              name
            }
          }
        }
      }
    `;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .expect(response => {
        const fetchedUser = response.body.data.user;
        expect(fetchedUser.id).toEqual(userId);
        expect(fetchedUser.email).toEqual('jane.smith@example.com');
        expect(fetchedUser.name).toEqual('Jane Smith');
        expect(fetchedUser.userGrants[0].grant.name).toEqual('Arts & Culture Fund');
      });
  });
});
