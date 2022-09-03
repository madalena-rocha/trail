import {
    BrowserRouter,
    Routes,
    Route,
    // Outlet,
    // Navigate
} from 'react-router-dom';

import Home from './pages/Home';
// import Profile from './pages/Perfil';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ProtectedRoute from './components/ProtectedRoute';

import Postagem from './pages/Postagem/';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
                 
            </Routes>
        </BrowserRouter>
    )
}