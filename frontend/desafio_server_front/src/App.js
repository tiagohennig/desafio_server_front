import { Box, DivList, Page, Title } from "./style"
import axios from 'axios'
import { useEffect, useState } from "react"
import { Card } from "./cards/cardProduto"


function App() {

    useEffect(() => {
        getProductsList()}, [] )

	const [produtos, setProdutos] = useState([])


	const getProductsList =  () => {
		axios.get("http://localhost:3003/produtos/")
		.then((response) => {
			setProdutos(response.data)
			console.log(produtos)
		})
	}

	const produtoDetalhe = produtos.map((produto) => {
		return(
			<Card produto={produto}></Card>
		)
	})

	return (

    	<Page>
			<Title>
				<h1>PRODUTOS</h1>
			</Title>

			<DivList>
				{produtoDetalhe}
			</DivList>
		</Page>

	)

}

export default App