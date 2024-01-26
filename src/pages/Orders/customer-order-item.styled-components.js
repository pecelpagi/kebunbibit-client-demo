import { styled } from "../../stitches.config"

export const Wrapper = styled('div', {
    boxShadow: '#31353b1f 0px 1px 6px 0px',
    borderRadius: '8px',
    variants: {
        isDefault: {
            true: {
                background: '#ebffef',
            },
        },
    },
    '& .inner-wrapper': {
        padding: '16px 24px',
    }
});