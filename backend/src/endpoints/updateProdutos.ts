import { Request, Response} from "express"
import connection from "../connection"

export async function updateProdutos(req: Request, res: Response):Promise<void> {

    try {
        const codigo = req.params.codigo
        const { descricao, preco } = req.body

        if (!descricao || !preco) {
            res.status(400).send("Todos os campos do cadastro devem estar completos.")
            return
        }

        const checkCodigo = await connection("server_produtos").select("*").where({ codigo })

        // Essa condicional checa se o código escolhido para edição realmente existe no banco. Se não existe, retorna um erro.
        if (!checkCodigo) {
            res.status(400).send("O código é inválido.")
            return
        }

        await connection("server_produtos")
            .update({
                descricao,
                preco: parseFloat(preco)
            })
            .where({
                codigo
            })

        res.status(200).send("Produto atualizado com sucesso!")

    } catch (error: any) {
        res.status(500).send("Aconteceu um erro no servidor.")
    }
}