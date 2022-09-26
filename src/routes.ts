import { Router } from 'express';
import { createProductController } from './useCase/CreateProduct';

const router = Router()


router.post('/product', (request, response) => {
    return createProductController.handle(request, response);
})

export {router}