import { PrismaClient } from "@prisma/client";

import { Product } from "../../../entities/Product";
import { IProductRepository } from "../IProductRepositoryCreate";

const prisma = new PrismaClient()

export class PrismaProductRepository implements IProductRepository{


    async findByName(name: string): Promise<Product[]> {
        const product = await prisma.product.findMany({
            where:{
                name: name
            }
        })
        return product;
    }
    async save(product: Product): Promise<void> {
        await prisma.product.create({data:product})
    }
}