import { Request, Response} from "express"
import connection from "../connection"

export async function updateProdutos(req: Request, res: Response):Promise<void> {

    try {

        const codigo = req.query.codigo
        const { descricao, preco, data_cadastro } = req.body

        const checkCodigo = await connection("server_produtos").select("*").where({codigo})

// Essa condicional checa se o código escolhido para edição realmente existe no banco. Se não existe, retorna um erro.
        if (checkCodigo.length) {


                if (descricao) {
                    await connection("server_produtos")
                    .update({
                        descricao: descricao.toString()
                    })
                    .where({
                        codigo
                    })
                
                    res.status(200).send("Descrição do produto alterado com sucesso!")

                } else if (data_cadastro && (typeof(data_cadastro) == "string")) {
                    await connection("server_produtos")
                    .update({
                        data_cadastro
                    })
                    .where({
                        codigo
                    })
                
                    res.status(200).send("Data de cadastro do produto alterada com sucesso!")

                } else if (preco) {

                    await connection("server_produtos")
                    .update({
                        preco: parseFloat(preco)
                    })
                    .where({
                        codigo
                    })
                
                    res.status(200).send("Preço do produto alterado com sucesso!")

                } else {
                    res.status(400).send("Algo foi digitado errado.")
                }


        } else {
            res.status(400).send("O código escolhido é inválido.")
        }

    } catch (error:any) {
        // Se no preço ele receber um valor em string que não seja um número que possa ser convertido, retorna um erro.
        if (error.sqlMessage.includes("NaN")) {
            res.status(400).send("O valor digitado para o preço é inválido. Precisa ser um número em formato de string ou de número.")
        }
        res.status(500).send(error.sqlMessage || error)
    }







}