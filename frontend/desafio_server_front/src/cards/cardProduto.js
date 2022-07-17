import axios from "axios"
import { useState } from "react"
import { Box } from "./style"

export const Card = (props) => {

    const [detalhe, setDetalhe] = useState(2)

    const updateDetalhe = (event) => {
        setDetalhe(event.target.value)
    }

    // const editarPreco = () => {
    //     const body =
    //     axios.put("http://localhost:3003/produtos/", body)
    // }

	// const editarDescricao = () => {
    //     const body =
	// 	axios.put("http://localhost:3003/produtos/", body)
	// }

	// const editarDataCadastro = () => {
    //     const body = 
	// 	axios.put("http://localhost:3003/produtos/", body)
	// }



    switch (true) {
        case (detalhe%2 === 0):
            return (
                <Box key={props.produto.key}>
                    <p>Cód.: {props.produto.codigo}</p>
                    <p>{props.produto.descricao}</p>
                    <button onClick={updateDetalhe} value={Number(detalhe) + 1}>Detalhes</button>
                    <button>Editar preço</button>
                    <button>Editar descrição</button>
                    <button>Editar data de cadastro</button>
                </Box>
            )
        case (detalhe%2 !== 0):
            return (
                <Box key={props.produto.key}>
                    <p>Cód.: {props.produto.codigo}</p>
                    <p>{props.produto.descricao}</p>
                    <p>R$ {props.produto.preco.toFixed(2)}</p>
                    <p>Cadastrado em: {props.produto.data_cadastro}</p>
                    <button onClick={updateDetalhe} value={Number(detalhe) + 1}>Detalhes</button>
                    <button >Editar preço</button>
                    <button>Editar descrição</button>
                    <button>Editar data de cadastro</button>
                </Box>
            )
    }

}