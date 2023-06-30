import { styled } from "styled-components"

export const LinhaBody = styled.tr`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
    border-bottom: 1px solid #000;
`
export const ColunaBody = styled.td`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
`

export const ColunaNomeBody = styled.td`
    display:flex;
    justify-content: center;
    width: 220px;
    border-right: 1px solid #000;
`

export const ColunaEmailBody = styled.td`
    display:flex;
    justify-content: center;
    width: 320px;
    border-right: 1px solid #000;
`

export const ColunaTelBody = styled.td`
    display:flex;
    justify-content: center;
    width: 200px;
    border-right: 1px solid #000;
`

export const BotaoEditar = styled.button`
    padding: 4px;
    margin-bottom: 4px;
    border: none;
    border-radius: 8px;
    background-color: #22a6b3;
    color: #fff;
    cursor: pointer;
` 
export const BotaoRemover = styled.button`
    padding: 4px;
    margin-bottom: 4px;
    border: none;
    border-radius: 8px;
    background-color: #eb4d4b;
    color: #fff;
    cursor: pointer;
` 