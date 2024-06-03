import React from 'react';
import {  ThemeProvider } from '@material-ui/core';
import createMuiTheme from "./theme/theme";
import JobListing from './Component/Header/indax.js'

const App = () => (
  <ThemeProvider theme={createMuiTheme}>
    <JobListing />
  </ThemeProvider>
);
export default App;
