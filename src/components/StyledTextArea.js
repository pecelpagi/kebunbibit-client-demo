import React from 'react';
import { styled } from '../stitches.config';
import { isHasProperty } from '../utils';

const StyledTextArea = styled('textarea', {
    resize: 'none',
    '&:focus': {
        borderColor: '$backgroundPrimary',
        outlineColor: '$backgroundPrimary',
    },
    variants: {
        invalid: {
            true: {
                borderColor: '#ef144a !important',
                outlineColor: '#ef144a !important',
            },
        },
    },
});

export default React.forwardRef((props, ref) => (
    <StyledTextArea
        {...props}
        ref={ref}
        className={`
            pl-3 
            py-2 pr-10 bg-white border outline-0
            placeholder-slate-400 block 
            w-full rounded text-sm
        `}
        {...isHasProperty(props, 'isInvalid') ? { invalid: props.isInvalid } : {}}
    />
));