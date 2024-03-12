import React from 'react';
import HeaderContextProvider from './HeaderContextProvider';
import HeaderOverlay from './HeaderOverlay';
import HeaderContent from './HeaderContent';

const Header = () => {
    return (
        <HeaderContextProvider>
            <HeaderContent />
            <HeaderOverlay />
        </HeaderContextProvider>
    )
}

export default Header;
