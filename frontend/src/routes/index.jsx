import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AutenticacaoContext } from '../context/autenticacao';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Registro from '../pages/Registro';


const AppRoutes = () => {
    const { usuarioLogado, setUsuarioLogado } = useContext(AutenticacaoContext);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUsuarioLogado(true);
        }
    }, [usuarioLogado]);


    return (
        <Routes>
            <Route path='/' element={usuarioLogado ? <Home /> : <Login />} />

            <Route path='/login/*' element={usuarioLogado ? <Home /> : <Login />} />
            <Route path='/registro/*' element={usuarioLogado ? <Home /> : <Registro />} />

        </Routes>
    );
}

export default AppRoutes;