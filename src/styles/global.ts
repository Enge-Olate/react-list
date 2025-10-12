import styled, { createGlobalStyle } from "styled-components";

export const cores ={
    corFundoPrincipal:'#ffffff',
    corBtnRemover:'#c23616',
    corBtnCancelar:'#c23616',
    corBtnEditar:'#2f3840',
    corBtnImportante:'#e1a32a',
    corBtnPendente:'#f0c11a',
    corBtnsalvar:'#44bd32',
    corFundoSidebar:'#eeeeee',
    corParagrafo:'#8b8b8b',
    corTitulo:'#000000',
    corFontsBtn:'#ffffff',
    corBorda: '#eeeeee',
    corFundoCard: '#a1a1a1',
    corSpan:'#5e5e5e',
    corCardQuandoAtivo: '#1E90FF',
    corFundoCardTarefa: '#FCFCFC'
}

const RootGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Roboto Mono', sans-serif;
        list-style: none;

}
`
export const container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;
    gap: 40px;
    
`

export default RootGlobalStyle

