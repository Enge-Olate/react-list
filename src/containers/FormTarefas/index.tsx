import { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles'
import { Botao, ContainerForm, Form, FormDescricao, SelectCriterio, Title } from "./styles";
import * as enums from '../../utils/enums/enumeracoes'
import { cadastrar } from '../../store/reducers/tarefas';
import type { RootReducer } from '../../store';
import Tarefa from '../../models/Tarefas';
export default function FormTarefa() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const dispatch = useDispatch()

    const cadastrarTarefa  = (evento: FormEvent)=> {
        evento.preventDefault()
        const addTarefa = new Tarefa(
            9,
            titulo,
            descricao,
            enums.Prioridade.IMPORTANTE,
            enums.Status.PENDENTE,
        )
        dispatch(
            cadastrar(addTarefa)
        )
    }
    return (
        <ContainerForm>
            <Title>Nova tarefa</Title>
            <Form onSubmit={cadastrarTarefa}>
                <input value={titulo} onChange={(evento) => setTitulo(evento.target.value)} type="text" placeholder="Titulo" />
                <FormDescricao value={descricao} onChange={(evento) => setDescricao(evento.target.value)} placeholder="Descrição" />
                <SelectCriterio>
                    <p>Prioridade</p>
                    <div>
                        {Object.values(enums.Prioridade).map((prioridade) => (
                            <div key={prioridade}>
                                <>
                                    <input value={prioridade} onChange={(evento) => setPrioridade(evento.target.value as enums.Prioridade)} defaultChecked={prioridade === enums.Prioridade.NORMAL} id={prioridade} type="radio" name='prioridade' />
                                    <label htmlFor={prioridade}>{prioridade}</label>
                                </>
                            </div>
                        ))}
                    </div>
                    <Botao>Cadastrar</Botao>
                </SelectCriterio>
            </Form>
        </ContainerForm>
    )
}