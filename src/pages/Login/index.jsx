import React, { useContext, useState, useMemo, useEffect } from 'react'
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import { AutenticacaoContext } from '../../context/autenticacao';



import { Container, LoginContainer, ImageContainer, FormContainer, SocialLogin, Socials, Social } from './styles';
import Main from '../../components/container';
import { Form, FormGroup, LabelIcons, Label, InputEntradas, CheckBox, ButtonEntradas } from '../../assets/styles/Form';
import LoginImage from '../../assets/image/codeLogin.svg';
import { Link } from 'react-router-dom';
import Mensagem from '../../components/mensagem';
import Loading from '../../components/loading';

// Icons
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleSquare } from 'react-icons/ai';





const Login = () => {
    const { loginAuth, loginValido, cadastroValido, loader, setSaveToken, saveToken } = useContext(AutenticacaoContext);




    const onSubmit = async (values, actions) => {
        const user = {
            username: values.usuario,
            password: values.senha,
        };

        loginAuth(user);


        await new Promise((resolve) => setTimeout(resolve, 500));
        actions.resetForm();

    }

    const formik = useFormik({
        initialValues: {
            usuario: '',
            senha: ''
        },
        validationSchema: loginSchema,
        onSubmit


    })



    return (
        <>
            {loader ? <Loading /> : null}
            <Container>
                <Main>
                    <LoginContainer>
                        <ImageContainer>
                            <img src={LoginImage} alt="Login" />
                            <Link to="/registro">Criar uma conta</Link>
                        </ImageContainer>
                        <FormContainer>
                            <h2>Login</h2>

                            {
                                !cadastroValido && loginValido ? <Mensagem texto="Usuário ou senha inválidos" back=" #ff0677" /> : null
                            }


                            {
                                cadastroValido && !loginValido ? <Mensagem texto="Cadastro realizado com sucesso" back="#00BE67" /> : null

                            }

                            <Form onSubmit={formik.handleSubmit}
                                autoComplete="off">


                                <FormGroup>
                                    <LabelIcons htmlFor="usuario">
                                        <BsFillPersonFill size="20"
                                            className={formik.touched.usuario && formik.errors.usuario ? 'errorIcons' : ''} />
                                    </LabelIcons>
                                    <InputEntradas type="text" placeholder="Nome de usuario" id="usuario"
                                        name="usuario" value={formik.values.usuario}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.usuario && formik.touched.usuario ? 'error' : ''}
                                        autoComplete="off"
                                    />
                                    {formik.errors.usuario && formik.touched.usuario ? <p className='error-text'>
                                        {formik.errors.usuario}
                                    </p> : null}

                                </FormGroup>

                                <FormGroup>
                                    <LabelIcons htmlFor="senha">
                                        <RiLockPasswordFill size="20" className={
                                            formik.errors.senha && formik.touched.senha ? 'errorIcons' : ''
                                        } />
                                    </LabelIcons>
                                    <InputEntradas type="password" placeholder="Senha" id="senha" name="senha"
                                        value={formik.values.senha}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.senha && formik.touched.senha ? 'error' : ''}
                                    />
                                    {formik.errors.senha && formik.touched.senha ? <p className='error-text'>
                                        {formik.errors.senha}
                                    </p> : null}

                                </FormGroup>

                                <FormGroup className='formCheck'>
                                    <CheckBox type="checkbox" name="relembrar" id="relembrar"
                                        onChange={() => setSaveToken(!saveToken)}
                                    />

                                    <Label htmlFor="relembrar" className='relembrar-termo'>Lembrar de mim</Label>
                                </FormGroup>


                                <FormGroup>
                                    <ButtonEntradas type="submit" className='buttonForm' id="entrar" value="Entrar" />
                                </FormGroup>

                            </Form>

                            <SocialLogin>
                                <span>Ou faça login com </span>
                                <Socials>
                                    <Social>
                                        <a href='#'>
                                            <FaFacebookSquare size="20" color='#3b5998' />
                                        </a>
                                    </Social>
                                    <Social>
                                        <a href='#'>
                                            <FaTwitterSquare size="20" color='#1da0f2' />
                                        </a>
                                    </Social>
                                    <Social>
                                        <a href='#'>
                                            <AiFillGoogleSquare size="23" color='#e72734' />
                                        </a>
                                    </Social>
                                </Socials>
                            </SocialLogin>

                        </FormContainer>
                    </LoginContainer>

                </Main>

            </Container>


        </>

    )
}

export default Login;