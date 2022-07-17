import { Request, Response} from "express"
import connection from "../connection"

export async function postProdutos(req: Request, res: Response):Promise<void> {
    
    try {
        const { descricao, preco, data_cadastro } = req.body

            if ( !descricao || !preco || !data_cadastro ) {
                res.status(400).send("Todos os campos do cadastro devem estar completos.")
            } else {
                await connection("server_produtos")
                .insert({
                    descricao,
                    // Inseri o parseFloat no código abaixo para que o preço digitado como número dentro de string torne-se um número.
                    preco: parseFloat(preco),
                    data_cadastro
                })
            
                res.status(200).send("Produto cadastrado com sucesso!")
            }

    } catch (error:any) {
// Se no preço ele receber um valor em string que não seja um número que possa ser convertido, retorna um erro.
        if (error.sqlMessage.includes("NaN")) {

            res.status(500).send("O valor digitado para o preço é inválido. Precisa ser um número em formato de string ou de número.")
        }
        res.status(500).send(error.sqlMessage || error)
    }

}

// O código de cada produto é gerado pelo SQL, pois na criação da tabela no MySQL 
// coloquei AUTO_INCREMENT na coluna 'codigo'.