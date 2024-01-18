import { fonts } from '../core';
import { styled } from '../stitches.config';

const StyledButton = styled('button', {
    fontFamily: fonts.brand,
    '&:hover': {
        cursor: 'pointer'
    },

    variants: {
        variant: {
            default: {
                backgroundColor: '$backgroundTertiary',
            },
            primary: {
                backgroundColor: '$backgroundPrimary',
                color: '$colorPrimary',
                border: '1px solid $backgroundPrimary',
            },
            danger: {
                backgroundColor: 'rgb(220 38 38)',
                color: '#FFFFFF'
            },
            white: {
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: '1px solid #ccc',
            }
        },
        outlined: {
            true: {
                backgroundColor: 'transparent',
                border: '1px solid',
                color: 'inherit',
            }
        }
    },
    defaultVariants: {
        variant: 'default'
    },
    compoundVariants: [
        {
            variant: 'primary',
            outlined: true,
            css: {
                border: '1px solid $backgroundPrimary',
                color: '$backgroundPrimary',
                backgroundColor: '#FFF',
            },
        },
        {
            variant: 'default',
            outlined: true,
            css: {
                border: '1px solid #e5e7e9',
            },
        }
        
    ]
});

export default (props) => {
    let classes = `py-2 px-4 rounded disabled:opacity-75 ${props.disabled ? 'cursor-not-allowed' : ''}`;

    if (props.className) classes = `${classes} ${props.className}`;

    return (<StyledButton {...props} className={classes}>{props.children}</StyledButton>);
};