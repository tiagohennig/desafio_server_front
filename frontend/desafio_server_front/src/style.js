import styled from 'styled-components'


export const Page = styled.div`
display: flex;
flex-direction: column;
font-family: Roboto,  sans-serif;
height: 100vh;
`

export const Title = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 120px;
background-color: #063675;
align-items: center;

h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 100;
    font-size: 50px;
    margin: 0;
}

`

export const DivNovoProduto = styled.div`
display: flex;
justify-content: center;

button {
    margin-top: 20px;
    padding: 15px;
    background-color: #31598F;
    border: 1px solid white;
    color: #ffffff;
    border-radius: 4px;
    font-size: 18px;
    
}

button:active {
    background-color: #063675;
}

`

export const DivList = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #94BDF2;
height: 100%;
justify-content: space-around;
padding-bottom: 30px;
`

export const BoxStyle = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 400,
bgcolor: '#31598F',
boxShadow: 24,
p: 5,
}

export const DivInputModalDescricao = styled.div`
font-family: Roboto,  sans-serif;
display: flex;
flex-direction: column;
color: #ffffff;
font-size: 17px;

input {
    height: 20px;
    width: 250px;
    border: 1px solid black;
    margin-bottom: 8px;
}
`

export const DivInputModalPreco = styled.div`
font-family: Roboto,  sans-serif;
display: flex;
flex-direction: column;
color: #ffffff;
font-size: 17px;

input {
    height: 20px;
    width: 70px;
    border: 1px solid black;
}

`

export const DivButtonModal = styled.div`
display: flex;
justify-content: center;

button {
    background-color: #31598F;
    border: 1px solid white;
    color: #ffffff;
    height: 30px;
    font-size: 20px;
    border-radius: 4px;
    margin-top: 20px;
}

button:active {
    background-color: #063675;
}
`