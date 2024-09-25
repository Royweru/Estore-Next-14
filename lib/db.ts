import { PrismaClient } from "@prisma/client";



declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") {
  if (!globalThis.prisma) {
    globalThis.prisma = client;
  }
}

export default client;
