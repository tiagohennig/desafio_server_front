import { Request, Response} from "express"
import connection from "../connection"

export async function postProdutos(req: Request, res: Response):Promise<void> {
    
    try {
        const { codigo, descricao, preco, data_cadastro } = req.body

        if ( !codigo || !descricao || !preco || !data_cadastro ) {
            res.status(400).send("Todos os campos do cadastro devem estar completos.")
        } else {
            await connection("server_produtos")
            .insert({
                codigo,
                descricao,
                preco,
                data_cadastro
            })
        
            res.status(200).send("Produto cadastrado com sucesso!")
        }

    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error)
    }

}