import { PrismaClient } from "@prisma/client";

export const cli = new PrismaClient();

export const callData = async () => {
  const fetchData = await cli.products.findMany();

  return fetchData;
};
