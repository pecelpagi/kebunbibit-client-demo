import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import Header from './Header';
import MobileMenu from './MobileMenu';
import MainLayoutProvider from './MainLayoutProvider';
import Footer from './Footer';
import { InnerWrapper } from './index.styled-components';

const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const ProductsPage = lazy(() => import('../pages/Products'));
const SearchProductsPage = lazy(() => import('../pages/SearchProducts'));
const HomePage = lazy(() => import('../pages/Home'));
const LayoutAccountPage = lazy(() => import('../pages/LayoutAccount'));

const MainLayout = () => {
    return (
        <MainLayoutProvider>
            <InnerWrapper className="relative">
                <Switch>
                    <Route
                        exact
                        path="/account/:type"
                        component={LayoutAccountPage}
                    />
                    <Route
                        exact
                        path="/product/:id"
                        component={ProductDetail}
                    />
                    <Route
                        exact
                        path="/search"
                        component={SearchProductsPage}
                    />
                    <Route
                        exact
                        path="/g/:slug"
                        component={ProductsPage}
                    />
                    <Route
                        path="/"
                        component={HomePage}
                    />
                </Switch>
            </InnerWrapper>
            <Footer />
            <Header />
            <MobileMenu />
        </MainLayoutProvider>
    );
}

export default MainLayout;