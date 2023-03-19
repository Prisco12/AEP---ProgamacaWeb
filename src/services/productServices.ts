import { writeFile, readFile } from 'fs/promises'

class productService{
    create (data){
        try {
            writeFile('products.json', JSON.stringify(data,null,2))
        } catch (error) {
            throw Error(error)
        } 
    }

    async list (){
        const product_list = await readFile('products.json','utf-8')
        return JSON.parse(product_list)
    }

    async stock (){
        const product_list = await this.list()
        const stock_list = product_list.map(item => {
            let product = {
              nome: item.nome,
              qtde: item.qtde,
              preco: item.preco,
              valor_estoque: item.qtde * item.preco,
              
            }
            return product
        })
        return stock_list
    }
    
}

export default new productService()