import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()
import {fakePost, fakeUser} from "./fake-data";

async function main() {

  const users = Array.from({length: 20}).map(() => fakeUser());

  await prisma.$transaction([
    prisma.post.deleteMany(),
    prisma.user.deleteMany()
  ])

  for(const user of users) {
    await prisma.user.create({
      data: {
        ...user,
        is_admin: false,
        posts: {
          create: {
            ...fakePost()
          }
        }
      }
    })
  }

  await prisma.user.create({
    data: {
      email: 'trufikao@gmail.com',
      name: 'Andrey',
      surname: 'Trofimuk',
      is_admin: true
    }
  })
}
main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect())