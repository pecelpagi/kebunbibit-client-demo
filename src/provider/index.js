import { theme, styled } from '../stitches.config';
import ContextProvider from './ContextProvider';

import './styles/normalize.css';
import './styles/global.styles.css';

import globalStyles from './styles';

const Wrapper = styled('div', {
    position: 'relative',
    maxWidth: '500px',
    margin: 'auto',
    '@md': {
        position: 'unset',
        maxWidth: 'unset',
        margin: 'unset',
    }
});

export const AppProvider = ({ children }) => {
    globalStyles();

    return (
        <ContextProvider>
            <div className={theme}>
                <Wrapper>{children}</Wrapper>
            </div>
        </ContextProvider>
    );
}

export default AppProvider;