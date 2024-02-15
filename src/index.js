import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    blue: '#3f51b5',
    accent: '#303f9f',
    error: 'red',
  },
  radius: '5px',
  spasing: value => `${value * 2}px`,
  transition: {
    standart: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);