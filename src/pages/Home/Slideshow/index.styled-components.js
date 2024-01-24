import { styled } from "../../../stitches.config";

export const Wrapper = styled('div', {
    '@md': {
        marginTop: '25px',
    },
    '& .slick-slide': {
        padding: '0px',
        '@md': {
            padding: '0 10px',
        }
    },
    '& .slick-slide.slick-active img': {
        boxShadow: 'none',
        '@md': {
            boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
        }
    },
    '& .slick-slide .img-container img': {
        borderRadius: '0px',
        '@md': {
            borderRadius: '10px',
        }
    }
});