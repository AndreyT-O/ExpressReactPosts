import prisma from "../../lib/prisma";
import pagination from "../../services/pagination";

interface IReqFind extends Request {
  query: {
      page?: number
  }
}

const handleFind = async (req: IReqFind, res) => {
  const page: number = req.query?.page || 1;
  const limit: number = 6;

  await pagination(
    prisma.user,
    page,
    limit,
    {
      posts: true
    }
  ).then((data) => {
    res.json(data)
  })
}

interface IReqGet extends Request {
  params: {
    id: string
  }
}

const handleGet = async (req: IReqGet, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: + req.params.id
    },
    include: {
      posts: true
    }
  })

  res.json({
    data: user
  })
}

const handleCreate = async (res, req) => {
  res.json({
    status: 'success'
  })
}

const handleUpdate = async (res, req) => {
  res.json({
    status: 'success'
  })
}

const handleDelete = async (res, req) => {
  res.json({
    status: 'success'
  })
}

export default {
  handleFind,
  handleGet,
  handleCreate,
  handleUpdate,
  handleDelete
}