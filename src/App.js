import React from 'react';
import { createGlobalStyle } from "styled-components";
import  Navbar  from './Navbar/Navbar';
import Banner from './Banner/banner';
import Menu from './Menu/Menu';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0px;
  }

  h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
  }
`
function App() {
  return (
<>
    <GlobalStyle />
    <Navbar />
    <Banner/>
    <Menu/>
<div>Pizza World!</div>
</>
  );
}

export default App;
