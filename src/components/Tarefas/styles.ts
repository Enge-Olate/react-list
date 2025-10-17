import styled from "styled-components";
import { cores } from "../../styles/global";
import * as enums from '../../utils/enums/enumeracoes'
type TagProps={
    prioridade?: enums.Prioridade
    status?: enums.Status
    parametro?: string
}

function verificaPrioridadeStatus(props: TagProps): string{
    if(props.status){
        return props.status === 'Pendente' ? cores.corBtnPendente : cores.corBtnsalvar;
        
    }else{
        if(props.prioridade === enums.Prioridade.URGENTE){
            return cores.corBtnCancelar
        }else if(props.prioridade === enums.Prioridade.IMPORTANTE){
            return cores.corBtnImportante
        }
    }
    return `${cores.corSpan}`
    
    
}

export const Card = styled.div`
    width: 1062px;
    height: 215px;
    margin-top: 40px;
    padding: 16px;
    border: 1px solid ${cores.corBorda};
    border-radius: 16px;
    background-color: ${cores.corFundoCardTarefa};
    box-shadow: 0px 4px 4px rgba(0,0,0, .25);

`
export const Titulo = styled.h2`
margin-bottom: 14px;
    font-size: 18px;
    font-weight: 700;
    color: ${cores.corTitulo};
    
`

export const Tag = styled.span<TagProps>`
    padding: 4px 8px;    
    margin-right:8px;
    background-color: ${(props) => verificaPrioridadeStatus(props)};
    border-radius: 8px;
    color: ${cores.corFundoPrincipal}

`
export const Descricao = styled.textarea`
width:1030px;
height: 48px;
border:none;
margin-top:16px;
color: ${cores.corParagrafo};
font-family: 'Roboto Mono';
font-size: 14px;
line-height: 24px;
font-weight: 400;
risize: none;
background-color: transparent;
`
export const BarraDeAcoes = styled.div`
padding-top: 16px;
border-top: 1px solid rgba(0, 0, 0, .1);

`

export const Botoes = styled.button`
padding: 8px 12px;
margin-right: 8px;
font-size: 12px;
font-weight:700;
border-radius: 8px;
background-color: ${cores.corBtnEditar};
color: ${cores.corFundoPrincipal};
cursor: pointer;
`

export const BotaoSalvar = styled(Botoes)`background-color: ${cores.corBtnsalvar};`
export const BotaoRemover = styled(Botoes)`background-color: ${cores.corBtnRemover};`