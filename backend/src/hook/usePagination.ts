import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

interface Pagination {
  data: Record<string, unknown>,
  meta: {
    total: number,
    per_page: number,
    current_page: number,
    last_page: number
  }
}

export default async function(
  model: any,
  page: number | undefined,
  limit?: number | undefined,
  additionalModel?: Record<string, unknown>,
  additionalWhere?: Record<string, unknown>
): Promise<Pagination> {
  const take: number = limit ?? 4;
  const skip: number = (page - 1) * limit ?? 0

  let anotherModel: Record<string, unknown> = {}
  let where: Record<string, unknown> = {}

  if(additionalModel) anotherModel = additionalModel;

  if(additionalWhere) where = additionalWhere;

  const [ list, count ] = await prisma.$transaction([
    model.findMany({
      take: take,
      skip: skip,
      where: {
        ...where
      },
      include: {
        ...anotherModel
      }
    }),
    model.count()
  ])

  return {
    data: list,
    meta: {
      "total": count,
      "per_page": limit,
      "current_page": page,
      "last_page": Math.ceil(count / limit),
    }
  }
}