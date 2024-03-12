import { styled } from '../../../stitches.config';

export const Wrapper = styled('div', {
    position: 'absolute',
    width: '100%',
    padding: 10,
    background: '#fff',
    '& .spinner-overlay': {
        borderRadius: '0.375rem'
    }
});

export const RowWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    height: '40px',
    alignItems: 'center',
    padding: '0px 15px',
    borderRadius: '0.375rem',
    '&:hover': {
        background: '#eeeeee',
        cursor: 'pointer'
    }
});
