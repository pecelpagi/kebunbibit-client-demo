import { styled } from '../../../stitches.config';

export const Wrapper = styled('div', {
    background: '#f3f4f5',
    display: 'flex',
    gap: '4px',
    flexDirection: 'column',
    marginTop: '16px',
    borderRadius: '12px',
    padding: '12px 16px'
})

export const ThumbImagesWrapper = styled('div', {
    'li': {
        display: 'inline-block',
        marginTop: '8px',
        marginRight: '8px',
        '.kebunbibit-product-reviews--image-thumb': {
            width: '60px',
            height: '60px',
            backgroundSize: 'cover',
            borderRadius: '8px',
        }
    }
})