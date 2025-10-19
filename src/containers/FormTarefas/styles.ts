import styled from "styled-components";
import { Botoes, Descricao, Titulo } from "../../components/Tarefas/styles";
import { cores } from "../../styles/global";

export const ContainerForm = styled.div`
    width: 1366px;
    padding: 40px 557px 1185px 262px;

`

export const Title = styled(Titulo)`
    width: 94px;
`

export const Form = styled.form`
    width: 547px;
    margin-bottom: 16px;
    input{
        padding: 8px;
        width: 100%;
        border: 1px solid ${cores.corFundoCard};
        border-radius: 8px;
        &::placeholder{
            font-size: 14px;
            font-weight: 700;
            color: #666666;
            }
    }
`

export const FormDescricao = styled(Descricao)`
margin-top: 16px;
padding: 8.75px;
width: 100%;
height: 183px;
border: 1px solid ${cores.corFundoCard};
border-radius: 8px;

&::placeholder{
font-size: 14px;
font-weight: 700;
color: #666666;
}
`

export const SelectCriterio = styled.div`
    width: 227px;
    height:38px;
    margin-top:16px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 700;
    color: #666666;
    
    div{
        margin-top: 6px;
        display:flex;
        column-gap: 4px;
        align-items: center;
    }
    
`
export const Botao = styled(Botoes)`
width:78px;
margin-top: 32px;
background-color:${cores.corBtnsalvar};
`