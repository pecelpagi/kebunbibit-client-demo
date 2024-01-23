import { styled } from "../../../stitches.config";

export const StyledButton = styled('button', {
    height: 'max-content',
    padding: '8px',
    color: '$colorSecondary',
    '& span': {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    }
});