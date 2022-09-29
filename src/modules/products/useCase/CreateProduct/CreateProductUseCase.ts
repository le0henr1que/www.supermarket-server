import { Product } from "../../entities/Product";
// import { IProductRepository } from "../../repositories/IProductRepositoryCreate";
import { IProductRepository } from "../../repositories/CreateProduct/IProductRepositoryCreate";
import { ICreateProductDTO } from "./CreateProductDTO";

export class CreateProductUseCase{

    constructor(
        private productRepository: IProductRepository
    ){}

    async execute(data: ICreateProductDTO){
        const poductNameAlredyExists = await this.productRepository.findByName(data.name);

        if(poductNameAlredyExists[0]?.name){
            throw new Error('Produto já existe na sua lista')
        }
        const product = new Product(data);

        await this.productRepository.save(product)

    }
}