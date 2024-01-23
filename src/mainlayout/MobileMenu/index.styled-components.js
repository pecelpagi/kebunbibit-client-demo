import { styled } from '../../stitches.config';

export const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '500px',
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    '@md': {
        display: 'none',
    },
    '& button': {
        flex: '1 1 0%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        color: '$colorSecondary',
        padding: '8px 0px',
        'span': {
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
        }
    }
});
