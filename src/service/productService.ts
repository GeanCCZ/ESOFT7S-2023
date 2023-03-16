import {writeFile,readFile} from 'fs/promises'


class ProductService{

    async createProductList(data){
        try{
            await writeFile('products.json',JSON.stringify(data))
        }catch(err){
            throw new Error('Falha ao salvar a lista de produtos')
        }
    }

    async getProducts(){
        
        try {
            const readProduct = await readFile('products.json','utf-8')
            return JSON.parse(readProduct)
        } catch (error) {
            throw new Error('Erro na leitura do arquivo')
        }
    }

    async getStock(){
        try {
            const product = await this.getProducts()
            const productList=product.map((item)=>{
                return{
                    nome: item.nome,
                    qtde: item.qtde,
                    preco: item.preco,
                    valor_stock: item.preco*item.qtde
                }
            })
            return productList; 
        } catch (error) {
            throw new Error('Erro na leitura do arquivo')
        }
    }
}

export default new ProductService();