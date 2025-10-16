import {configureStore} from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtrosReducer from './reducers/filtro'
export const store = configureStore({
    reducer:{
        tarefas: tarefasReducer,
        filtros: filtrosReducer          
    }
})

export type RootReducer = ReturnType<typeof store.getState>