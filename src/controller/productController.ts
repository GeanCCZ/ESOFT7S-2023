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
        const produto= JSON.parse(await productService.getProducts())
        console.log(produto)
        const listarProdutos=produto.map((item) =>{
            return{
                Nome: item.nome,
                Quantidade: item.qtde,
                Preco: item.preco,
                Data_De_Compra: item.data_compra,
                data_De_Entrega: item.data_De_Entrega
            }
        })
    return listarProdutos
    }
}

export default new productController();