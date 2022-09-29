import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepositoryCreate";
import { ICreateProductDTO } from "./CreateProductDTO";

export class CreateProductUseCase{

    constructor(
        private productRepository: IProductRepository
    ){}

    async execute(data: ICreateProductDTO){
        console.log(data)
        const poductNameAlredyExists = await this.productRepository.findByName(data.name);

        // console.log(poductNameAlredyExists[0].name)

        if(poductNameAlredyExists[0]?.name){
            throw new Error('Produto já existe na sua lista')
        }
        const product = new Product(data);

        await this.productRepository.save(product)

    }
}