import prisma from "../../lib/prisma";
import pagination from "../../services/pagination";

interface IReq extends Request {
  query: {
    page?: number
  }
}

const handleFind = async (req: IReq, res) => {
  const page: number = +req.query?.page || 1;

  const limit: number = 6;

  await pagination(
    prisma.post,
    page,
    limit,
    {
      user: true
    }
  ).then((data) => {
    res.json(data)
  })
}

const handleGet = async (req, res) => {
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
}

// handleCreate
// handleUpdate
// handleDelete

export default {
  handleFind,
  handleGet
}