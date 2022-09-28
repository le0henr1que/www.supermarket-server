import { uuid } from "uuidv4";

export class Product {
    public readonly id!: string;
    public name!: string;
    public count!: number;
    public price!: string;

    //Omiti o Id 
    constructor(props: Omit<Product, 'id'>, id?: string){
        //Passa todas as propriedades de Product para this
        Object.assign(this, props);
        //Não deixar a responsabilidade do uuid para o Banco de dados, passando um uuid caso não exista
        if(!id){
            this.id = uuid()
        }

    }
}