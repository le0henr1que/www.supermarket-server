import {Request, Response } from 'express';
import { ListProductUseCase } from './ListProductUseCase';


export class ListProductController{

    constructor(
        private listProductUseCase: ListProductUseCase
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const product = await this.listProductUseCase.execute()
            return response.status(200).json({product})
        }catch(err){
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