import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import AppProvider from './provider';
import MainLayout from './mainlayout';

const CheckoutPage = lazy(() => import('./pages/Checkout'));
const LogoutPage = lazy(() => import('./pages/Logout'));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/auth/logout" component={LogoutPage} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/">
                <MainLayout />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
