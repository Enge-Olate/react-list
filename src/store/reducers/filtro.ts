import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/enumeracoes'
export type FiltroState={
    termo?: string
    criterio: 'prioridade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState ={
termo:"",
criterio: 'todas'
}

const filtrosSlice = createSlice({
    name: 'filtros',
    initialState,
    reducers:{
        alterarTermo:(state, action: PayloadAction<string>)=>{
            state.termo = action.payload
        },
        alterarFiltro: (state, action: PayloadAction<FiltroState>)=>{
            state.criterio = action.payload.criterio
            state.valor = action.payload.valor
        }
    }
})

export const {alterarTermo, alterarFiltro} = filtrosSlice.actions
export default filtrosSlice.reducer