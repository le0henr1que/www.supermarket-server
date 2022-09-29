import { PrismaClient } from "@prisma/client";

import { Product } from "../../../entities/Product";
import { IProductRepositoryListAll } from "../IProcuctRepositoryListAll";

const prisma = new PrismaClient()

export class PrismaProductRepositoryListAll implements IProductRepositoryListAll{
    async listAllProduct(): Promise<Product[]> {
        const product = await prisma.product.findMany()
        return product;
    }

}