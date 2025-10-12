import styled from "styled-components";
import { cores } from "../../styles/global";

export const Aside = styled.aside`
    height:1317px;
    background-color:${cores.corFundoSidebar};
`
export const busca = styled.input`
width: 192px;
height:32px;
margin: 16px 0 13px 16px;
border-radius: 8px;
border: 1px solid ${cores.corBorda};

&::placeholder{
    font-size: 14px;
    font-weight: 700;
    color: ${cores.corTitulo}
    }
    `
    export const cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    `
    export const cardFiltrado = styled.div`
    padding: 8px;
    background-color: #fcfcfc;
    border: 1px solid ${cores.corBorda};
    color: ${cores.corSpan};
    span{
        font-size:24px;
        font-weight:700;
    }
    p{
        font-size:16px;
        font-weight:400;

    }    
`
