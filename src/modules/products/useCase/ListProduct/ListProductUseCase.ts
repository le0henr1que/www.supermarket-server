import { Product } from "../../entities/Product";
import { IProductRepositoryListAll } from "../../repositories/ListAllProduct/IProcuctRepositoryListAll";

export class ListProductUseCase{

    constructor(
        private productRepositoryList: IProductRepositoryListAll
    ){}

    async execute(){
        const product = await this.productRepositoryList.listAllProduct()
        return product
    }
}