import React from 'react';
import { createGlobalStyle } from "styled-components";
import  Navbar  from './Navbar/Navbar';

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
<div>React World!</div>
</>
  );
}

export default App;
