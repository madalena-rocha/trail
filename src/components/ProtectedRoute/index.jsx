import {Outlet, Navigate} from 'react-router-dom';

export default function ProtectedRoute(props) { /* quando tentar acessar uma rota, entra dentro do componente, verifica se a pessoa está autenticada, se sim, retorna o Outlet, que se transforma no componente que deseja acessar e renderiza na tela */
    const token = localStorage.getItem('token'); /* verifica se existe um token que identifica se a pessoa está logada */
    return token ? <Outlet/> : <Navigate to={props.redirect} /> /* verifica se o token existe, se existir, retorna um componente ou uma página, caso contrário, redireciona para a página de login */
}