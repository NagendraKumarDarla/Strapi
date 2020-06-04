import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./containers/App";
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme.styles';

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={'en'}>
          <App />
        </IntlProvider>
      </ThemeProvider>,
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
