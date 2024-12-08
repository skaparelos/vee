import { PrismaClient } from "@prisma/client";
import { users } from './seed/users';
import { grants } from './seed/grants';
import { grantApplications } from './seed/grantApplications';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.grant.deleteMany(),
    prisma.grantApplication.deleteMany(),
  ]);

  // Seed in order of dependencies
  for (const data of users) {
    await prisma.user.create({ data });
  }

  for (const data of grants) {
    await prisma.grant.create({ data });
  }

  for (const data of grantApplications) {
    await prisma.grantApplication.create({ data });
  }

  console.log("Seeding completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
