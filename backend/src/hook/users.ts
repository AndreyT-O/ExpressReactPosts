import express from 'express';
import { PrismaClient } from '@prisma/client'
import usePagination from "../hook/usePagination";

const routes = express.Router();
const prisma = new PrismaClient();

routes.get('/', async function(req, res, next) {
  const page: number = +req.query?.page || 1;
  const limit: number = 6;

  await usePagination(
    prisma.user,
    page,
    limit,
    {
      posts: true
    }
  ).then((data) => {
    res.json(data)
  })
})

routes.get('/:id', async function(req, res, next) {
  const user = await prisma.user.findUnique({
    where: {
      id: +req.params.id
    },
    include: {
      posts: true
    }
  })

  res.json({
    data: user
  })
})

// routes.post('users', function (req, res, next) {
//   res.json({
//     status: 'success'
//   })
// })
//
// routes.put('users/:id', function (req, res, next) {
//   res.json({
//     status: 'success'
//   })
// })
//
// routes.delete('users/:id', function (req, res, next) {
//   res.json({
//     status: 'success'
//   })
// })


export default routes