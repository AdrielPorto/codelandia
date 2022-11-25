import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { cadastroSchema } from '../../schemas';
import { AutenticacaoContext } from '../../context/autenticacao';
import Loading from '../../components/loading';
import Mensagem from '../../components/mensagem';

import { Link } from 'react-router-dom';
import { Container, RegistroContainer, FormContainer, ImageContainer } from './styles';
import Main from '../../components/container';
import RegistroImage from '../../assets/image/registro-login.svg';
import { Form, FormGroup, LabelIcons, Label, InputEntradas, CheckBox, ButtonEntradas } from '../../assets/styles/Form';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';







const Registro = () => {

    const { cadastrar, loader, emailValido } = useContext(AutenticacaoContext);

    const onSubmit = async (values, actions) => {

        const user = {
            username: values.usuario,
            email: values.email,
            password: values.senha,
        };
        cadastrar(user);

        await new Promise((resolve) => setTimeout(resolve, 500));
        actions.resetForm();

    }



    const formik = useFormik({
        initialValues: {
            usuario: '',
            email: '',
            senha: '',
            confirmarSenha: '',
            formCheck: false
        },
        validationSchema: cadastroSchema,
        onSubmit


    })

    const registrarForm = (e) => {
        e.preventDefault();

    }

    return (
        <>
            {loader && <Loading />}
            <Container>

                <Main>
                    <RegistroContainer>

                        <FormContainer>
                            <h2>Registro</h2>

                            {emailValido && <Mensagem texto='Email já cadastrado' back='#ff0677' />}


                            <Form onSubmit={formik.handleSubmit} autoComplete="off">

                                <FormGroup>
                                    <LabelIcons htmlFor="usuario">
                                        <BsFillPersonFill size="20" className={formik.touched.usuario && formik.errors.usuario ? 'errorIcons' : ''} />
                                    </LabelIcons>

                                    <InputEntradas type="text" placeholder="Nome de usuario" id="usuario"
                                        name="usuario"
                                        value={formik.values.usuario}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.usuario && formik.touched.usuario ? 'error' : ''} autoComplete="off" />
                                    {formik.errors.usuario && formik.touched.usuario ? <p className='error-text'>
                                        {formik.errors.usuario}
                                    </p> : null}
                                </FormGroup>

                                <FormGroup>
                                    <LabelIcons htmlFor="email">
                                        <MdEmail size="20" className={formik.touched.email && formik.errors.email ? 'errorIcons' : ''} />
                                    </LabelIcons>
                                    <InputEntradas type="email" placeholder="Seu Email" id="email" name="email" value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.email && formik.touched.email ? 'error' : ''} />
                                    {formik.errors.email && formik.touched.email ? <p className='error-text'>
                                        {formik.errors.email}
                                    </p> : null}
                                </FormGroup>

                                <FormGroup>
                                    <LabelIcons htmlFor="senha">
                                        <RiLockPasswordFill size="20" className={formik.touched.senha && formik.errors.senha ? 'errorIcons' : ''} />
                                    </LabelIcons>
                                    <InputEntradas type="password" placeholder="Senha" id="senha" name="senha" value={formik.values.senha}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.senha && formik.touched.senha ? 'error' : ''} />

                                    {formik.errors.senha && formik.touched.senha ? <p className='error-text'>
                                        {formik.errors.senha}
                                    </p> : null}
                                </FormGroup>

                                <FormGroup>
                                    <LabelIcons htmlFor="confirmarSenha">
                                        <RiLockPasswordLine size="20"
                                            className={formik.touched.confirmarSenha && formik.errors.confirmarSenha ? 'errorIcons' : ''} />

                                    </LabelIcons>
                                    <InputEntradas type="password" placeholder="Repita sua senha" id="confirmarSenha" name="confirmarSenha"
                                        value={formik.values.confirmarSenha}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.confirmarSenha && formik.touched.confirmarSenha ? 'error' : ''}
                                    />
                                    {
                                        formik.errors.confirmarSenha && formik.touched.confirmarSenha ? <p className='error-text'>
                                            {formik.errors.confirmarSenha}
                                        </p> : null
                                    }
                                </FormGroup>

                                <FormGroup className='formCheck'>
                                    <CheckBox type="checkbox" name="formCheck" id="formCheck"
                                        value={formik.values.formCheck}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <Label htmlFor="relembrar" className='relembrar-termo'>Eu concordo com
                                        <Link to="/termos"> termos e condições</Link>
                                    </Label>
                                    {
                                        formik.errors.formCheck && formik.touched.formCheck ? <p className='error-text'>
                                            {formik.errors.formCheck}
                                        </p> : null}

                                </FormGroup>

                                <FormGroup className='buttonRegistro'>
                                    <ButtonEntradas type="submit" className='buttonForm' id="registrar" value="Registrar"
                                    />
                                </FormGroup>
                            </Form>
                        </FormContainer>

                        <ImageContainer>
                            <img src={RegistroImage} alt="Registro" />
                            <Link to="/login">Eu já sou membro</Link>
                        </ImageContainer>
                    </RegistroContainer>
                </Main>
            </Container>
        </>
    )
}

export default Registro;