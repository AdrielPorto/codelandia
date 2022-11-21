
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { api } from "../Api/api";

export const AutenticacaoContext = createContext({});

const AutenticacaoProvider = ({ children }) => {
    const history = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [loginValido, setLoginValido] = useState(false);
    const [cadastroValido, setCadastroValido] = useState(false);
    const [emailValido, setEmailValido] = useState(false);
    const [usuarioLogado, setUsuarioLogado] = useState(false);
    const [saveToken, setSaveToken] = useState(false);

    const [loader, setLoader] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            const getUser = async () => {
                const token = localStorage.getItem('token');
                if (token) {
                    const { data } = await api.get(`/users/${token}`);
                    setUsuario(data.username);
                }
            };
            getUser();
        }, 500);
        return () => clearTimeout(timer);
    }, []);


    const verifyEmail = async (email) => {
        const { data } = await api.post('/users/email', { email });
        if (data) {
            return true;
        } else {
            return false;
        }
    };

    const cadastrar = async (value) => {

        verifyEmail(value.email).then((res) => {
            if (res) {
                setEmailValido(true);
                return;
            } else {
                api.post('users/', value).then((response) => {
                    setLoader(true);
                    if (response.status === 201) {
                        setLoader(false);
                        history('/login');
                        setCadastroValido(true);
                        setLoginValido(false);
                        setEmailValido(false);

                    }
                }).catch((error) => {
                    console.log(error);
                    setLoader(false);
                });
            }
        });



    }

    const loginAuth = async (value) => {
        setLoader(true);
        const { data } = await api.post('/login', value);
        if (data) {
            console.log(data);
            if (saveToken) {
                localStorage.setItem('token', data.uuid);
            }
            setUsuario(data.username);
            history('/');
            setLoginValido(false);
            setCadastroValido(false);
            setLoader(false);
            setUsuarioLogado(true);
            setEmailValido(false);
        } else {
            setLoginValido(true);
            setCadastroValido(false);
            setLoader(false);
        }
    }




    return (
        <AutenticacaoContext.Provider value={{
            cadastrar,
            loginAuth,
            usuario,
            loginValido,
            setLoginValido,
            usuarioLogado,
            setUsuarioLogado,
            cadastroValido,
            emailValido,
            setEmailValido,
            setCadastroValido,
            loader,
            setLoader,
            saveToken,
            setSaveToken
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
};

export default AutenticacaoProvider;