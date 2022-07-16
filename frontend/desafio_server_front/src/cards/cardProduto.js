import { useState } from "react"
import { Box } from "./style"


export const Card = (props) => {

    const [detalhe, setDetalhe] = useState(2)

    const updateDetalhe = (event) => {
        setDetalhe(event.target.value)
    }

    switch (true) {
        case (detalhe%2 === 0):
            return (
                <Box key={props.produto.key}>
                    <p>{props.produto.codigo}</p>
                    <p>{props.produto.descricao}</p>
                    <button onClick={updateDetalhe} value={Number(detalhe) + 1}>DETALHES</button>
                </Box>
            )
        case (detalhe%2 !== 0):
            return (
                <Box key={props.produto.key}>
                    <p>{props.produto.codigo}</p>
                    <p>{props.produto.descricao}</p>
                    <p>{props.produto.preco}</p>
                    <p>{props.produto.data_cadastro}</p>
                    <button onClick={updateDetalhe} value={Number(detalhe) + 1}>DETALHES</button>
                </Box>
            )
    }

    console.log(detalhe)

}