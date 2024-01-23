import { styled } from '../../stitches.config';

export const Wrapper = styled('div', {
    maxWidth: '500px',
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    '@md': {
        maxWidth: 'unset',
        left: '0',
        transform: 'none',
    }
});

export const InnerWrapper = styled('div', {
    maxWidth: '1280px',
    display: 'flex',
    position: 'relative',
    margin: 'auto',
    gap: '1em',
    alignItems: 'center',
    width: 'inherit',
});

export const LogoWrapper = styled('div', {
    display: 'none',
    '@md': {
        display: 'block'
    }
})