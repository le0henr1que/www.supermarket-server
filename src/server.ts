import { PrismaClient } from '@prisma/client';
import express from 'express'


const app = express();

app.use(express.json())

const prisma = new PrismaClient()

app.get('/product', async (request, response) =>{
    const product = await prisma.product.findMany()

    response.status(200).json(product)
})

app.listen(3333)