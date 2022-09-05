 import React from 'react';
 import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate
} from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Perfil';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

import Postagem from './pages/Postagem';


export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
                <Route element={<ProtectedRoute redirect='sign-in' />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/postagem' element={<Postagem />} />
                </Route>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}