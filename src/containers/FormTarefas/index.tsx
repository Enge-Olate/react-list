import { useState, type FormEvent } from 'react';
import { useDispatch} from 'react-redux';
import './styles'
import { Botao, ContainerForm, Form, FormDescricao, SelectCriterio, Title } from "./styles";
import * as enums from '../../utils/enums/enumeracoes'
import { cadastrar } from '../../store/reducers/tarefas';
import { useNavigate } from 'react-router-dom';
export default function FormTarefa() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
    const dispatch = useDispatch()
    const navegante = useNavigate()
    const cadastrarTarefa  = (evento: FormEvent)=> {
        evento.preventDefault()
        dispatch(
            cadastrar({
                titulo,
                descricao,
                prioridade,
                status: enums.Status.PENDENTE
            }),
            navegante('/')
        )
    }
    function alertTarefa(){
        if(titulo){

            return alert('Tarefa criada com sucesso!')
        }
    }
    return (
        <ContainerForm>
            <Title>Nova tarefa</Title>
            <Form onSubmit={cadastrarTarefa}>
                <input required value={titulo} onChange={(evento) => setTitulo(evento.target.value)} type="text" placeholder="Titulo" />
                <FormDescricao value={descricao} onChange={(evento) => setDescricao(evento.target.value)} placeholder="Descrição" />
                <SelectCriterio>
                    <p>Prioridade</p>
                    <div>
                        {Object.values(enums.Prioridade).map((prioridade) => (
                            <div key={prioridade}>
                                <>
                                    <input defaultChecked={prioridade === enums.Prioridade.NORMAL} value={prioridade} onChange={(evento) => setPrioridade(evento.target.value as enums.Prioridade)} id={prioridade} type="radio" name='prioridade' />
                                    <label htmlFor={prioridade}>{prioridade}</label>
                                </>
                            </div>
                        ))}
                    </div>
                    <Botao onClick={()=>alertTarefa()}  type='submit'>Cadastrar</Botao>
                </SelectCriterio>
            </Form>
        </ContainerForm>
    )
}