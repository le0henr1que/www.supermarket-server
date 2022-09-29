import { app } from "./app";

app.listen(3333)

// import { PrismaClient } from '@prisma/client';
// import express from 'express'


// const app = express();

// app.use(express.json())

// const prisma = new PrismaClient()


// app.get('/product', async (request, response) => {
//     const product = await prisma.product.findMany()
// }



// app.post('/product', async (request, response) => {
//     const {name, count, price} = request.body
// app.get('/product', async (request, response) =>{
//     const product = await prisma.product.findMany()

//     response.status(200).json(product)
// })

// app.post('/product', async (request, response) => {
//     const {name, count, price} = request.body;

//     try{
//         const product = await prisma.product.create({
//             data:{
//                 name:name,
//                 count:Number(count),
//                 price:price    
//             }
//         })

//         response.status(201).json([product]);

//     }catch(err){
//         response.status(401).json({
//             error:true, 
//             Message: err
//         });
//     }
// })

// app.get('/product/:id', async (request, response) => {
//     const id = await request.params.id;
//     console.log(id)

//     const product = await prisma.product.findMany({
//         where:{
//             id,
//         }, 
       
//     })
//     response.status(200).json({product})
// })

// app.delete('/product/:id', async (request, response) => {
//     const idProduct = await request.params.id;

//     const product = await prisma.product.delete({
//         where:{
//             id:idProduct
//         }
//     })

//     response.status(201).json({
//         error:false, 
//         message: product
//     })
// })

// app.listen(3333)