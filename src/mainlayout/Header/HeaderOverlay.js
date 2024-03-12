import React, { useContext } from 'react'
import Box from '../../components/Box'
import HeaderContext from './HeaderContext'

const HeaderOverlay = () => {
    const { searchKeyword, isEnteringSearchInput } = useContext(HeaderContext);

    if (!(searchKeyword.length > 0 && isEnteringSearchInput)) return null;

    return (
        <Box
            css={{
                position: 'fixed',
                top: 0,
                zIndex: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#000000b3'
            }}
        />
    )
}

export default HeaderOverlay