import styled from "styled-components";
import { cores } from "../../styles/global";

export const Aside = styled.aside`
    height:100vh;
    padding: 16px;
    background-color:${cores.corFundoSidebar};
`
export const busca = styled.input`
width: 100%;
height:32px;
border-radius: 8px;
border: 1px solid ${cores.corBorda};
backgroun-color: ${cores.corFundoPrincipal};
&::placeholder{
    font-size: 14px;
    font-weight: 700;
    color: ${cores.corTitulo}
    }
    `
export const cards = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    `

