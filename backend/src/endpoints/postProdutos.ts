import { Request, Response} from "express"
import connection from "../connection"

export async function postProdutos(req: Request, res: Response):Promise<void> {
    
    try {
        const { descricao, preco } = req.body

            if ( !descricao || !preco ) {
                res.status(400).send("Todos os campos do cadastro devem estar completos.")
            } else {
                await connection("server_produtos")
                .insert({
                    descricao,
                    preco,
                })
            
                res.status(200).send("Produto cadastrado com sucesso!")
            }

    } catch (error:any) {

        if (error.sqlMessage.includes("NaN")) {

            res.status(500).send("O valor digitado para o preço é inválido. Precisa ser um número em formato de string ou de número.")
        }
        res.status(500).send(error.sqlMessage || error)
    }

}
