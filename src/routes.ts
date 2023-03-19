import { Router } from 'express'
import productController from './controller/productController'

const routes = Router()

routes.post('/products', productController.createProducts)
routes.get('/products', productController.listProducts)

routes.get('/products-stock', productController.stockProducts)

export default routes