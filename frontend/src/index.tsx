import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './assets/scss/index.scss';
import {Container} from "@mui/material";
import App from "./pages/App";
import Header from "./layouts/Header";
import {ThemeProvider, createTheme} from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontSize: 16,
  }
})

root.render(
  <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Container maxWidth="lg">
          <App />
        </Container>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
