import React from 'react';
import { DivList, Page, Title, BoxStyle, DivButtonModal, DivInputModal, DivInputModalPreco, DivInputModalDescricao, DivNovoProduto } from "./style"
import axios from 'axios'
import { useEffect, useState } from "react"
import { Card } from "./cards/cardProduto"
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



function App() {
	const [produtos, setProdutos] = useState([])
	const [alterarListagem, setAlterarListagem] = useState(false)
	const [open, setOpen] = React.useState(false)
	const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")

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

    useEffect(() => {
        getProductsList()}, [alterarListagem] )

	const getProductsList =  () => {
		axios.get("http://localhost:3003/produtos/")
		.then((response) => {
			setProdutos(response.data)
			console.log(produtos)
		})
	}

	const produtosDetalhe = produtos.map((produto) => {
		return(
			<Card key={produto.codigo} produto={produto} 
			setAlterarListagem={setAlterarListagem} 
			alterarListagem={alterarListagem}></Card>
		)
	})

	const novoProduto = async () => {
        if (!validaCampos()) {
            return
        }

		const body = {
			descricao: descricao,
			preco: preco
		}
		try {
			const response = await axios.post("http://localhost:3003/produtos/", body)
			setOpen(!open)
            toast.success(response.data)
			setPreco("")
			setDescricao("")
		} catch (error) {
			toast.error(error.response.data)
		}

	}

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handlePrecoOnChange = (event) => {
        setPreco(event.target.value)
    }

    const handleDescricaoOnChange = (event) => {
        setDescricao(event.target.value)
    }

	return (

    	<Page>
			<ToastContainer />
					<Modal open={open} onClose={handleClose}>
					<Box sx={BoxStyle}>
						<DivInputModalDescricao>
							<label> Descrição: </label>
							<input type="text" onChange={handleDescricaoOnChange} value={descricao}></input>
						</DivInputModalDescricao>

						<DivInputModalPreco>
							<label> Preço(R$): </label>
							<input type="text" onChange={handlePrecoOnChange} value={preco}></input>
						</DivInputModalPreco>

						<DivButtonModal>
							<button onClick={() => {novoProduto();setAlterarListagem(!alterarListagem)}}>Cadastrar produto</button>
						</DivButtonModal>
					</Box>
					</Modal>
			<Title>
				<h1>PRODUTOS</h1>
			</Title>

			<DivNovoProduto>
				<button onClick={handleOpen}>CADASTRAR NOVO PRODUTO</button>
			</DivNovoProduto>

			<DivList>
				{produtosDetalhe}
			</DivList>

		</Page>
	)
}

export default App