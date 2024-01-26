import { styled } from "../../../stitches.config";

export const SectionBox = styled('div', {
    padding: '15px 25px',
    borderBottom: '4px solid #F3F4F5',
})

export const StyledWrapper = styled('div', {
    overflow: 'auto',
    width: '100%',
    position: 'absolute',
    '@md': {
        position: 'relative',
    },
});