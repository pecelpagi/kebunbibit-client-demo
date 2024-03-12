import { styled } from "../../stitches.config";

export const ContentWrapper = styled('div', {
    '& .inner-wrapper': {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '25px',
        '& > div': {
            maxWidth: '236px',
        }
    },
});
