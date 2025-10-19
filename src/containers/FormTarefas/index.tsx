import './styles'
import { Botao, ContainerForm, Form, FormDescricao, SelectCriterio, Title } from "./styles";
export default function FormTarefa() {

    return (
        <ContainerForm>
            <Title>Nova tarefa</Title>
            <Form>
                <input type="text" placeholder="Titulo" />
                <FormDescricao placeholder="Descrição" />
                <SelectCriterio>
                    <p>Prioridade</p>
                    <div>
                        <input type="radio" name="Urgente" id="" />
                        <label htmlFor="">Urgente</label>
                        <input type="radio" name="Urgente" id="" />
                        <label htmlFor="">Importante</label>
                        <input type="radio" name="Urgente" id="" />
                        <label htmlFor="">Normal</label>
                    </div>
                    <Botao>Cadastrar</Botao>                    
                </SelectCriterio>
            </Form>
        </ContainerForm>
    )
}