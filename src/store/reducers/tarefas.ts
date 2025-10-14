import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/enumeracoes'
import Tarefa from '../../models/Tarefas'


const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState: [
        new Tarefa(
            1,
            'Estudar Typescript',
            'Refazer a aula do móduo 2',
            enums.Prioridade.IMPORTANTE,
            enums.Status.CONCLUIDO
        ),
        new Tarefa(
            1,
            'Estudar Javascript',
            'Refazer a aula do móduo 2',
            enums.Prioridade.IMPORTANTE,
            enums.Status.PENDENTE
        ),
        new Tarefa(
            1,
            'Estudar C',
            'Refazer a aula do móduo 2',
            enums.Prioridade.NORMAL,
            enums.Status.CONCLUIDO
        )
    ],
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state = state.filter((tarefa) => tarefa.id !== action.payload)
        }
    }
})
export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer