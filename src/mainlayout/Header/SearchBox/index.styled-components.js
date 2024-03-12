import { styled } from '../../../stitches.config';

export const Wrapper = styled('div', {
    flex: '1 1 0%',
    position: 'relative',
    '@lg': {
        flex: '1 1 0%',
    },
    '& img': {
        margin: '0 18px',
        height: '18px',
    },
    '& input': {
        flex: '1 1 0%',
        background: 'transparent',
        outline: 'none',
    },
});

export const InnerWrapper = styled('div', {
    background: '#eee',
    display: 'flex',
    flexDirection: 'row',
    height: '40px',
    alignItems: 'center',
});
