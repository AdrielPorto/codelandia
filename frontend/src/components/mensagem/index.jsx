import React, { useContext } from 'react';
import { AutenticacaoContext } from '../../context/autenticacao';

import { MensagemText } from './styles'
import { TbAlertCircle } from "react-icons/tb";
import { MdClose } from 'react-icons/md';

const Mensagem = ({ texto, back }) => {
    const { setLoginValido, setCadastroValido, setEmailValido } = useContext(AutenticacaoContext);

    const closeError = () => {
        setLoginValido(false);
        setCadastroValido(false);
        setEmailValido(false);
    }


    return (
        <MensagemText back={back}>
            <TbAlertCircle size={18} />
            {texto}
            <MdClose className='close' size={18} onClick={closeError} />
        </MensagemText>
    )
}

export default Mensagem