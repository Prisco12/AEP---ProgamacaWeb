import { Request, Response } from 'express'
import productServices from '../services/productServices'

class ProductController{    
    createProducts(req: Request, res: Response) {
        productServices.create(req.body)
        res.status(201).send()
    }

    async listProducts(req: Request, res: Response) {
        const products_list = await productServices.list()
        res.status(200).send(products_list)
    }

    async stockProducts(req: Request, res: Response) {
        const stock_list = await productServices.stock()
        res.status(200).send(stock_list)
    }
  
}

export default new ProductController()