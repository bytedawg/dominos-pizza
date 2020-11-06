import React, {Component} from 'react';
import styled from 'styled-components';
import pizzaRed from "../Styles/color";
import Title from "../Styles/title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 0px;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: white;

`


class Navbar extends Component {
    render() {
        return <NavbarStyled>
            
            <Logo><FontAwesomeIcon icon={faPizzaSlice} />  Domino's Pizza</Logo>
            </NavbarStyled>
    }
}

export default Navbar;