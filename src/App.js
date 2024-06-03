import React from 'react';
import {  ThemeProvider } from '@material-ui/core';
import theme from "./theme/theme";
import Header from './Component/Header/indax'

const App = () => (
  <ThemeProvider theme={theme}>
    <Header/>
  </ThemeProvider>
);
export default App;
