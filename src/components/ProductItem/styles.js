import { styled } from '../../stitches.config';

export const Wrapper = styled('div', {
    width: '100%',
    flex: '1 1 0%',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
        boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.1)',
    },
    '& .product-name': {
        height: '44px',
        overflowX: 'hidden',
        overflowY: 'hidden',
        textOverflow: 'ellipsis',
    },
    '& .product-price': {
        color: '#F04630',
        fontWeight: '600',
    },
    '& img': {
        borderRadius: '8px 8px 0px 0px',
    },
    variants: {
        type: {
            cart: {
                minWidth: '425px',
                padding: '15px 25px',
                flexDirection: 'row',
                flex: 'unset',
                display: 'flex',
                borderRadius: '0px',
                borderBottom: '5px solid #f3f4f5',
                gap: '15px',
                '&:hover': {
                    boxShadow: 'none'
                },
                '&:last-child': {
                    borderBottom: '0px'
                },
                '& img': {
                    borderRadius: '8px',
                },            
            }
        }
    }
});