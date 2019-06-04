/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function App() {
  return (
    <div>
      <BootstrapProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </BootstrapProvider>
    </div>
  );
}
