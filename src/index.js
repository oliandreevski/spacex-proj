import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './themes/theme'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// Apollo connection
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});



ReactDOM.render(
  <ThemeProvider theme={Theme}>
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>     
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

