import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/enumeracoes'
import Tarefa from '../../models/Tarefas'

type PropsTarefas = {
    items: Tarefa[]
}
const initialState: PropsTarefas = {
    items: [
        {
            "id": 1,
            "titulo": "Completar o relatório de vendas",
            "descricao": "Gerar o relatório de vendas trimestral e enviá-lo para a equipe de gerenciamento.",
            "prioridade": enums.Prioridade.IMPORTANTE,
            "status": enums.Status.PENDENTE
        },
        {
            "id": 2,
            "titulo": "Agendar consulta médica",
            "descricao": "Ligar para o consultório do Dr. Silva para agendar um check-up anual.",
            "prioridade": enums.Prioridade.URGENTE,
            "status": enums.Status.CONCLUIDO
        },
        {
            "id": 3,
            "titulo": "Comprar mantimentos",
            "descricao": "Ir ao supermercado para comprar itens da lista de compras da semana.",
            "prioridade": enums.Prioridade.URGENTE,
            "status": enums.Status.CONCLUIDO
        },
        {
            "id": 4,
            "titulo": "Estudar para a prova de certificação",
            "descricao": "Revisar os capítulos 5 a 8 do material de estudo para a prova da próxima sexta-feira.",
            "prioridade": enums.Prioridade.IMPORTANTE,
            "status": enums.Status.CONCLUIDO
        },
        {
            "id": 5,
            "titulo": "Consertar a torneira da cozinha",
            "descricao": "Comprar as peças necessárias e consertar a torneira que está vazando na cozinha.",
            "prioridade": enums.Prioridade.NORMAL,
            "status": enums.Status.PENDENTE
        }
    ]
}

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((tarefa) => tarefa.id !== action.payload)

    }
}
})
export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer