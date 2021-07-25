import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider, 
  InMemoryCache
} from '@apollo/client'; 
import App from './App'; 
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css";

/**
 * Trying to keep the components as close to pure as possible. Below Component is for fetching Data using Apollo Client.
 * StrictMode built-in component is used to enable a set of checks that React performs and warns you about.
 * One of the main use cases of this component is to be used as an automated best practices, potential problems and deprecations check
 * @component
 * @param {string} REACT_APP_KEY Retrieve GITHUB Key from .env
 */

const REACT_APP_KEY = process.env.REACT_APP_KEY   

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers:{
    authorization:  `Bearer ` + REACT_APP_KEY
  }
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
        <React.StrictMode><App /></React.StrictMode>    
    </ApolloProvider>
    </BrowserRouter>,
  
  document.getElementById('root')
);