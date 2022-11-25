import * as yup from 'yup';


const regrasSenhas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;;

export const loginSchema = yup.object().shape({
    usuario: yup.string().required('Por favor, informe um usuário válido'),
    senha: yup.string().required('Por favor, informe uma senha válida'),
});

export const cadastroSchema = yup.object().shape({
    usuario: yup.string().required('Por favor, informe um usuário válido'),
    email: yup.string().required('Por favor, informe um email válido'),
    senha: yup
        .string()
        .min(5, 'A senha deve ter no mínimo 5 caracteres')
        .matches(regrasSenhas, 'A senha precisa de uma letra maiúscula, uma minúscula e um número')
        .required('Por favor, informe uma senha válida'),
    confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais').required('Por favor, confirme a senha'),
    formCheck: yup.boolean().oneOf([true], 'Você deve aceitar os termos de uso'),

});