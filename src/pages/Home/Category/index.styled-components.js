import { styled } from "../../../stitches.config";

export const ContentWrapper = styled('div', {
    overflowX: 'auto',
    padding: '1px',
    '& .inner-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: '15px',
        width: '100%',
        minWidth: '1200px',
        '@md': {
            minWidth: '980px',
        }
    },
    '& .category-content': {
        flex: '1 1 0%',
        padding: '10px',
        border: '1px solid #EBECF2',
        '& img': {
            width: '100%',
        }
    },
});
