import * as Prisma from "../../repositories/ListAllProduct/implementation/PrismaProductRepositoryListAll";
import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";

const PrismaProductRepositoryListAll = new Prisma.PrismaProductRepositoryListAll()

const ProductUseCase = new ListProductUseCase(
    PrismaProductRepositoryListAll
)

const listProductController = new ListProductController(
    ProductUseCase
)

export { ProductUseCase, listProductController}