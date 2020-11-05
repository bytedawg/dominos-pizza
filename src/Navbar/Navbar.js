import React, {Component} from 'react';
import styled from 'styled-components';
import pizzaRed from "../Styles/color";
import Title from "../Styles/title";


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
            <Logo>Dominos Pizza</Logo>
            </NavbarStyled>
    }
}

export default Navbar;