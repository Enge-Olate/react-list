import { NavLink } from 'react-router-dom';
import * as n from './styles'
export default function NavBar() {
    return (
        <n.Nav>
            <h4>Minhas Tarefas</h4>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Tarefas
                    </NavLink>
                </li>
                <li>|</li>
                <li>
                    <NavLink to={'/cadastrar'}>
                        Nova Tarefa
                    </NavLink>
                </li>
            </ul>

        </n.Nav>
    )
}

