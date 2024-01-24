import { styled } from '../../../stitches.config';

export const ContentWrapper = styled('div', {
    overflowX: 'auto',
    padding: '5px',
    '& .inner-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        width: '100%',
        minWidth: '1200px',
    },
});
