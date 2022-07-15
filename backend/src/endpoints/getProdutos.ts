import { Request, Response} from "express"
import connection from "../connection"

export async function getProdutos(req: Request, res: Response):Promise<void> {
    
    try {
        const produtos = await connection("server_produtos")
        .select("*")
    
        res.status(200).send(produtos)
    } catch (error) {
        res.status(400).send(error)
    }

}