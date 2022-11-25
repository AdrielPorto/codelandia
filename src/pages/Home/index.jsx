import React, { useContext } from 'react'



import { Link } from 'react-router-dom';
import Header from '../../components/menu';
import Container from '../../components/container';
import { GiNotebook } from 'react-icons/gi';
import { AiOutlineFieldNumber, AiOutlineNumber } from 'react-icons/ai';
import { VscSymbolBoolean, VscSymbolString, VscVariableGroup } from 'react-icons/vsc';

import {
    HomeContainer, ContainerDesafio,
    ContainerMenuLateral, HeaderDesafio,
    ButtonLink, Ul, Li, DesafiosItem,
    RanqueLateral
} from './styles';

const Home = () => {
    return (
        <>
            <Header />
            <Container >
                <HomeContainer>

                    <ContainerDesafio>
                        <HeaderDesafio theme={'#fe7f00'}>
                            <div>
                                <h2>Python Básico</h2>
                                <p>Aprenda códigos simples e conceitos básicos de python</p>
                            </div>
                            <ButtonLink to="/desafio" theme={'#fe7f00'} bordercolor={'#db6e00'}>
                                <GiNotebook size={24} />
                                Guia
                            </ButtonLink>
                        </HeaderDesafio>

                        <Ul>
                            <Li>
                                <DesafiosItem theme={'#fe7f00'} shadow={'#8d4b08'}>
                                    <div>
                                        <AiOutlineFieldNumber size={24} />
                                        <h3>Tipo numérico</h3>
                                    </div>
                                    <span>0%</span>
                                </DesafiosItem>
                                <DesafiosItem theme={'#fe7f00'} shadow={'#8d4b08'}>
                                    <div>
                                        <AiOutlineNumber size={24} />
                                        <h3>Tipo float</h3>
                                    </div>
                                    <span>0%</span>
                                </DesafiosItem>
                            </Li>

                            <Li>
                                <DesafiosItem theme={'#fe7f00'} shadow={'#8d4b08'}>
                                    <div>
                                        <VscSymbolBoolean size={24} />
                                        <h3>Tipo booleano</h3>
                                    </div>
                                    <span>0%</span>
                                </DesafiosItem>
                                <DesafiosItem theme={'#fe7f00'} shadow={'#8d4b08'}>
                                    <div>
                                        <VscSymbolString size={24} />
                                        <h3>Tipo string</h3>
                                    </div>
                                    <span>0%</span>
                                </DesafiosItem>
                            </Li>

                            <Li>
                                <DesafiosItem theme={'#fe7f00'} shadow={'#8d4b08'}>
                                    <div>
                                        <VscVariableGroup size={24} />
                                        <h3>Escopo de variáveis</h3>
                                    </div>
                                    <span>0%</span>
                                </DesafiosItem>
                            </Li>

                        </Ul>
                    </ContainerDesafio>

                    <ContainerMenuLateral>
                        <RanqueLateral>
                            <h2>Ranque</h2>

                            <ul>
                                <li>
                                    <span className="primeiro">1</span>
                                    <p>Vinicius777</p>
                                </li>
                                <li>
                                    <span className="segundo">2</span>
                                    <p>AmendoBobo</p>
                                </li>
                                <li>
                                    <span className="terceiro">3</span>
                                    <p>KeferaRaiinha</p>
                                </li>
                                <li>
                                    <span>4</span>
                                    <p>PastorMetralhadora</p>
                                </li>
                                <li>
                                    <span>5</span>
                                    <p>Rosangela</p>
                                </li>
                            </ul>
                        </RanqueLateral>
                    </ContainerMenuLateral>

                </HomeContainer >
            </Container >
        </>
    )
}

export default Home;