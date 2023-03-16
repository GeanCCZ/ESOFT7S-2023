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
            return readProduct;
        } catch (error) {
            throw new Error('Falha,EEEERROOOOu')
        }
    }
}

export default new ProductService();