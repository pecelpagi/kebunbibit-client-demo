import { styled } from '../../../stitches.config';

export const Wrapper = styled('div', {
    width: '100%',
    position: 'relative',
    '& .product-name': {
        height: '44px',
        overflowX: 'hidden',
        overflowY: 'hidden',
        textOverflow: 'ellipsis',
    },
    '& .kebunbibit-product-img': {
        height: '97px',
    },
    '& .product-price': {
        color: '#F04630',
        fontWeight: '600',
    },
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
});

export const QtyInputWrapper = styled('div', {
    width: '150px',
    '& button': {
        height: '32px',
        padding: '0px',
        width: '34px',
    },
    '& input': {
        flex: '1 1 0%',
        height: '32px',
    }
})