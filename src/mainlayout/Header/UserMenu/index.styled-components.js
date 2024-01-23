import { styled } from '../../../stitches.config';

export const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 0%',
    justifyContent: 'end',
    gap: '10px',
    maxWidth: 'max-content',
    '@md': {
        maxWidth: '230px',
        gap: 'unset',
        justifyContent: 'space-evenly',
    },
    '& button': {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        color: '$colorSecondary',
        'span': {
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
        },
        'svg g': {
            fill: '$colorSecondary'
        },
        '.cart-total-qty': {
            position: 'absolute',
            background: '#F04630',
            color: '#FFF',
            width: '20px',
            height: '20px',
            display: 'flex',
            right: 6,
            bottom: 30,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
});
