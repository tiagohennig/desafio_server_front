import styled from "styled-components"

export const Box = styled.div`
margin: 30px;
padding: 10px;
background-color: #31598F;
height: fit-content;
width: 200px;
color: #ffffff;
border-radius: 5px;

div {
display: flex;
justify-content: center;
}

button {
    margin: 2px;
    padding: 5px;
    background-color: #31598F;
    border: 1px solid white;
    color: #ffffff;
    border-radius: 4px;
    font-size: 16px;
}

button:active {
    background-color: #063675;
}

button:last-child {
    background-color: #E02838;
}

button:last-child:active {
    background-color: #750202;
}

`

export const DivMaisDetalhes = styled.div`

`

export const DivInput = styled.div`
display: flex;
flex-direction: column;

input {
    margin-top: 3px;
    margin-bottom: 8px;
    height: 22px;
}
`

export const ButtonDelete = styled.button`


/* :active {
    background-color: #981B25;
} */
`