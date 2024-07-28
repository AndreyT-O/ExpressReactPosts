import express from 'express';
import { PrismaClient } from '@prisma/client'
import usePagination from "../hook/usePagination";

const routes = express.Router();
const prisma = new PrismaClient();

routes.get('/', async function(req, res, next) {
  const page: number = +req.query?.page || 1;
  const limit: number = 6;

  await usePagination(
    prisma.post,
    page,
    limit,
    {
      user: true
    }
  ).then((data) => {
    res.json(data)
  })
})

routes.get('/:id', async function(req, res, next) {
  const post = await prisma.post.findUnique({
    where: {
      id: +req.params.id
    },
    include: {
      user: true
    }
  })

  res.json({
    data: post
  })
})

export default routes