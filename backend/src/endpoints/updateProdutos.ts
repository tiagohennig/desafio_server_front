import { Request, Response} from "express"
import connection from "../connection"

export async function updateProdutos(req: Request, res: Response):Promise<void> {
    
    try {

        const codigo = req.query.codigo
        const codigoNovo = req.body.codigo
        const { descricao, preco, data_cadastro } = req.body
    
        const checkCodigo = await connection("server_produtos").select("*").where({codigo})
        
        if (codigo && checkCodigo.length && codigoNovo && (typeof(codigoNovo) == "string")) {
            await connection("server_produtos")
            .update({
                codigo: codigoNovo
            })
            .where({
                codigo
            })
        
            res.status(200).send("Código do produto alterado com sucesso!")

        } else if (descricao && checkCodigo.length && (typeof(descricao) == "string")) {
            await connection("server_produtos")
            .update({
                descricao
            })
            .where({
                codigo
            })
        
            res.status(200).send("Descrição do produto alterado com sucesso!")

        } else if (data_cadastro && checkCodigo.length && (typeof(data_cadastro) == "string")) {
            await connection("server_produtos")
            .update({
                data_cadastro
            })
            .where({
                codigo
            })
        
            res.status(200).send("Data de cadastro do produto alterada com sucesso!")

        } else if (preco && checkCodigo.length && (typeof(preco) == "number")) {
            await connection("server_produtos")
            .update({
                preco
            })
            .where({
                codigo
            })
        
            res.status(200).send("Preço do produto alterado com sucesso!")

        } else {
            res.status(400).send("Algo foi digitado errado.")
        }

    } catch (error) {
        res.status(500).send("Erro no servidor.")
    }

}