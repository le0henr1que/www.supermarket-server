import * as Prisma  from "../../repositories/implementations/PrismaProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const PrismaProductRepository = new Prisma.PrismaProductRepository()

const productUseCase = new CreateProductUseCase(
    PrismaProductRepository
)

const createProductController = new CreateProductController(
    productUseCase
)

export {productUseCase, createProductController}