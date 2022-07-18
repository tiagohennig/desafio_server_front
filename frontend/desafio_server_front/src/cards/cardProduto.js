import axios from "axios"
import { useEffect, useState } from "react"
import { Box, ButtonDelete, DivInput, DivMaisDetalhes } from "./style"
import { toast } from "react-toastify"

export const Card = (props) => {
    const [detalhe, setDetalhe] = useState(false)
    const [editar, setEditar] = useState(false)
    const [preco, setPreco] = useState(props.produto.preco)
    const [descricao, setDescricao] = useState(props.produto.descricao)
    const [dataBD, setData] = useState(props.produto.data_cadastro)

    const t = dataBD.split("");
    const dataConvertida = (`${(t[8]+t[9])}` + "/" + `${(t[5]+t[6])}` + "/" + `${(t[0]+t[1]+t[2]+t[3])}`)

    const validaCampos = () => {
        if (!preco || !descricao) {
            toast.error("Todos os campos devem estar completos.")
            return false
        }

        if (isNaN(preco)) {
            toast.error("No campo 'Preço' deve ser informado um número válido.")
            return false
        }

        return true
    }

    const deleteProduto = async () => {
        try {
            const response = await axios.delete(`http://localhost:3003/produtos/${props.produto.codigo}`)
            alterar()
            toast.success(response.data)
        } catch (error) {
            toast.error(error.response.data)
        }
    }

    const updateDetalhe = () => {
        setDetalhe(!detalhe)
    }

    const updateEditar = () => {
        setEditar(!editar)
    }

    const resetState = () => {
        setDetalhe(false)
        setEditar(false)
    }

    const alterar = () => {
        resetState()
        props.setAlterarListagem(!props.alterarListagem)
    }

    const handlePrecoOnChange = (event) => {
        setPreco(event.target.value)
    }

    const handleDescricaoOnChange = (event) => {
        setDescricao(event.target.value)
    }

    const editarBD = async () => {
        if (!validaCampos()) {
            return
        }

        try {
            const body = {
                preco: preco,
                descricao: descricao
            }
            const response = await axios.put(`http://localhost:3003/produtos/${props.produto.codigo}`, body)
            alterar()
            toast.success(response.data)
        } catch (error) {
            toast.error(error.response.data)
        }

    }


    if (!detalhe) {
        return (
            <Box key={props.produto.codigo}>
                <p>Cód.: {props.produto.codigo}</p>
                <p>{props.produto.descricao}</p>
                <DivMaisDetalhes>
                    <button onClick={updateDetalhe}>Mais detalhes</button>
                    <button onClick={deleteProduto}>Excluir</button>
                </DivMaisDetalhes>

            </Box>
        )
    } else {
        return (
            <Box key={props.produto.codigo}>
                <p>Cód.: {props.produto.codigo}</p>
                <p>{props.produto.descricao}</p>
                <p>R$ {props.produto.preco.toFixed(2)}</p>
                <p>Cadastrado em: {dataConvertida}</p>
                <DivInput>
                    {editar? (
                        <>
                            <label>
                                Descrição:
                                <input type="text" onChange={handleDescricaoOnChange} value={descricao}></input>
                            </label>
                            <label>
                                Preço:
                                <input type="text" onChange={handlePrecoOnChange} value={preco}></input>
                            </label>
                        </>
                    ) : <></>
                    }

                    </DivInput>
                    <div>
                            <button onClick={resetState}>Menos detalhes</button>
                        <div>
                            {editar? (
                                <button onClick={() => { editarBD()}}>Salvar</button>
                            ) : <button onClick={updateEditar}>Editar</button>}
                                <ButtonDelete onClick={deleteProduto}>Excluir</ButtonDelete>
                        </div>
                </div>

                
            </Box>
            )
    }

}