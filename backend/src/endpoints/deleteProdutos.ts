import { Request, Response} from "express"
import connection from "../connection"

export async function deleteProdutos(req: Request, res: Response):Promise<void> {
    
    try {
        const codigo = req.params.codigo
        const checkCodigo = await connection("server_produtos").select("*").where({codigo})

        if (codigo && checkCodigo.length) {
            await connection("server_produtos")
        .del()
        .where({
            codigo
        })
    
        res.status(200).send("O produto foi deletado do sistema com sucesso.")
        } else {
            res.status(400).send("Algo errado com o código digitado.")
        }

    
        res.status(200).send("O produto foi deletado do sistema com sucesso.")
    } catch (error) {
        res.status(400).send(error)
    }

}