import styled from "styled-components";
import { cores } from "../../styles/global";
import type { Props } from ".";

type PropNotLegendaContador = Omit<Props,  'legenda' | 'contador'>

export const Card = styled.div<PropNotLegendaContador>`
    padding: 8px;
    background-color: ${(props) => (props.ativo ? cores.corFundoCard : cores.corFundoPrincipal)} ;
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