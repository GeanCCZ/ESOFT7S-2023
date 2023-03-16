import {writeFile,readFile} from 'fs/promises'
import { Request, Response } from 'express'
import productService from '../service/productService';

class productController{

    public async createProduct(req:Request,res: Response){
        const product= productService.createProductList(req.body)
        return res.status(201).send()
    }


    //2 - Criar uma nova rota do tipo GET chamada: /products, que ao ser acessada irá ler o arquivo products.json
    //e retornar os valores presentes nesse arquivo
    public async getProduct(req:Request,res:Response){
        const product = await productService.getProducts()
        return res.json(product)
    }

    public async getProduct_Stock(req:Request,res:Response){
        const productList=await productService.getStock()    
        return res.json(productList)
    }

}

export default new productController();