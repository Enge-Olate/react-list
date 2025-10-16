import styled from "styled-components";
import { cores } from "../../styles/global";
type Props={ativo?: boolean}
export const Card = styled.div<Props>`
    padding: 8px;
    background-color: ${(props) => (props.ativo ? cores.corFundoCardTarefa : cores.corFundoPrincipal)} ;
    border: 1px solid ${(props) => (props.ativo ? cores.corBorda : cores.corCardQuandoAtivo)};
    color: ${(props) => (props.ativo ? cores.corSpan : cores.corCardQuandoAtivo)};
    border-radius:8px;        
`
export const Contador = styled.span`
    font-size: px;
    font-weight: bold;

`
export const Label = styled.p`
    font-size: 14px;
`