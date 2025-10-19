import { styled } from "styled-components";
import { cores } from "../../styles/global";


export const Nav = styled.nav`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${cores.corFundoPrincipal};
    font-size: 18px;
    background-color: ${cores.corSpan};
    ul{
        display: flex;
        gap: 1rem;
    }
    li, a{
        color: ${cores.corFundoPrincipal};
    font-size: 16px;
    }
`