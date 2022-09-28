import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {

    constructor(
        private createProductUseCase: CreateProductUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const {name, count, price} = request.body;
        
        try{
            await this.createProductUseCase.execute({
                name, 
                count, 
                price
            })
            return response.status(201).send()

        }catch(err){
            console.log(err)
            if (err instanceof Error) {
         
                return response.status(400).json({
                    message: err.message
                })
              } else {
         
                return response.status(400).json({
                    message:'Unexpected error'
                })
              }
          
            
        }
    }
}