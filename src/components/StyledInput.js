import React from 'react';
import { styled } from '../stitches.config';
import { isHasProperty } from '../utils';

const StyledInput = styled('input', {
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
    <StyledInput
        {...props}
        autoComplete="off"
        ref={ref}
        className={`
            pl-3 
            py-2 pr-10 bg-white border outline-0
            placeholder-slate-400 block 
            w-full rounded text-sm
            ${isHasProperty(props, 'extendClassName') ? props.extendClassName : ''}
        `}
        {...isHasProperty(props, 'isInvalid') ? { invalid: props.isInvalid } : {}}
    />
));