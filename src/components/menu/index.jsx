import { useState, useContext } from "react";
import { AutenticacaoContext } from '../../context/autenticacao';
import { Menu, Logo, Nav, NavList, NavItem, Dropdown, DropdownItem } from './styles';
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from 'react-icons/cg'
const Header = () => {
    const [open, setOpen] = useState(false);

    const { usuario, setUsuarioLogado } = useContext(AutenticacaoContext);

    const history = useNavigate();

    const hoverDropdown = () => {
        setOpen(true);
    }

    const leaveDropdown = () => {
        setOpen(false);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUsuarioLogado(false);
        history('/login');

    }

    return (
        <Menu>
            <Logo>
                <Link to="/"><span>Code</span>landia</Link>
            </Logo>
            <Nav>
                <NavList>
                    <NavItem onMouseEnter={hoverDropdown}
                        onMouseLeave={leaveDropdown}>


                        <span>
                            {usuario}
                        </span>
                        <CgProfile size={36} />

                        {
                            open && (
                                <Dropdown>
                                    <div>Conta</div>
                                    <Link to="/perfil">
                                        <DropdownItem>
                                            Perfil
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/configuracao">
                                        <DropdownItem>
                                            Configurações
                                        </DropdownItem>
                                    </Link>
                                    <DropdownItem className="logout" onClick={logout}>
                                        Sair
                                    </DropdownItem>
                                </Dropdown>
                            )
                        }

                    </NavItem>
                </NavList>
            </Nav>
        </Menu >
    )
}

export default Header;