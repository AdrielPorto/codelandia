import React from 'react'
import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles';
const Loading = () => {
    return (
        <LoadingContainer>
            <ReactLoading type={'spin'} color={'#711c91'} height={'120px'} width={'120px'} />
        </LoadingContainer>
    )
}

export default Loading;