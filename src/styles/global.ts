import { createGlobalStyle } from "styled-components";

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
    corFontsBtn:'#ffffff'

}

const RootGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Roboto Mono', sans-serif;
        background-color:${cores.corFundoPrincipal};
}

`


export default RootGlobalStyle

