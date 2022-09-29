import { Router } from 'express';
import { createProductController } from './modules/products/useCase/CreateProduct';
import { listProductController } from './modules/products/useCase/ListProduct';

const router = Router()

router.post('/product', (request, response) => {
    return createProductController.handle(request, response);
})
router.get('/product', (request, response) => {
    return listProductController.handle(request, response);
})


export {router}