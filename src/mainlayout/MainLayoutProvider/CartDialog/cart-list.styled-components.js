import { styled } from "../../../stitches.config";

export const CartDataWrapper = styled('div', {
    overflow: 'auto',
    width: '100%',
    position: 'absolute',
    '@md': {
        position: 'relative',
    },
});

export const FooterWrapper = styled('div', {
    padding: '15px 25px',
    position: 'absolute',
    width: '100%',
    bottom: '0',
    '@md': {
        position: 'relative',
    },
});