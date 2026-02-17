/*
    Bu dosya uygulama genelinde kullanılacak tek PrismaClient instanceını oluşturur.
    API routelarda yeni bağlantı açmak yerine buradan import edilir.
*/

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
