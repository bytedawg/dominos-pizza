import React, {useState} from 'react';
import { createGlobalStyle } from "styled-components";
import  Navbar  from './Navbar/Navbar';
import Banner from './Banner/banner';
import Menu from './Menu/Menu';
import FoodDialog from './FoodDialog/FoodDialog';
import GlobalStyle from './Styles/GlobalStyle';
import {Order} from './Order/Order';
import useOpenFood from './Hooks/useOpenFood';

function App() {
  const openFood = useOpenFood();

  return (
<>
    <GlobalStyle />
    <FoodDialog {...openFood}/>
    <Navbar />
    <Order/>
    <Banner/>
    <Menu  {...openFood}/>
</>
  );
}

export default App;
