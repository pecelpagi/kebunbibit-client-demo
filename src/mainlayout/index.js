import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import { styled } from '../stitches.config';
import Header from './Header';
import MobileMenu from './MobileMenu';
import MainLayoutProvider from './MainLayoutContext';
import Footer from './Footer';

const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const ProductsPage = lazy(() => import('../pages/Products'));
const HomePage = lazy(() => import('../pages/Home'));
const LayoutAccountPage = lazy(() => import('../pages/LayoutAccount'));

const InnerWrapper = styled('div', {
    marginTop: '56px',
    position: 'relative',
    '@md': {
        marginTop: '100px',
    },
});

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