// import * as Prisma  from "../../repositories/implementations/PrismaProductRepository";
import * as Prisma  from "../../repositories/CreateProduct/implementations/PrismaProductRepositoryCreate";

import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const PrismaProductRepository = new Prisma.PrismaProductRepository()
//create merge
const productUseCase = new CreateProductUseCase(
    PrismaProductRepository
)

const createProductController = new CreateProductController(
    productUseCase
)

export {productUseCase, createProductController}