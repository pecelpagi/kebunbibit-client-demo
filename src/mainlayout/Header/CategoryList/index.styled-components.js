import { styled } from "../../../stitches.config";

export const Wrapper = styled('div', {
    display: 'none',
    justifyContent: 'center',
    position: 'relative',
    '@md': {
        display: 'flex',
    },
});
