import { Product } from "../entities/Product";

export interface IProductRepositoryListAll{
    listAllProduct(): Promise<Product>
}
