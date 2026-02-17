/*
    Bu dosya uygulama genelinde kullanılacak tek PrismaClient instanceını oluşturur.
    API routelarda yeni bağlantı açmak yerine buradan import edilir.
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma
