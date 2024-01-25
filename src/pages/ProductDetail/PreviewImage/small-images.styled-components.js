import { styled } from "../../../stitches.config";

export const ImgWrapper = styled('div', {
    '.kebunbibit-product-img': {
        border: '3px solid transparent',
    },
    borderRadius: '8px',
    width: '100%',
    cursor: 'pointer',
    variants: {
        active: {
            true: {
                '.kebunbibit-product-img': {
                    borderColor: '$backgroundPrimary',
                }
            }
        }
    },
});