import React from 'react';
import Box from '../../../components/Box';
import RatingStar from '../../../components/RatingStar';
import { styled } from '../../../stitches.config';

const Wrapper = styled('div', {
    background: '#f3f4f5',
    display: 'flex',
    gap: '4px',
    flexDirection: 'column',
    marginTop: '16px',
    borderRadius: '12px',
    padding: '12px 16px'
})

const ThumbImagesWrapper = styled('div', {
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

const RowData = ({ data }) => {
    return (
        <Wrapper className="text-sm">
            <Box
                className="font-semibold"
                css={{
                    color: "#F04630"
                }}
            >{data.customer_name}</Box>
            <div className="flex flex-row items-center gap-2">
                <div style={{ maxWidth: '75px' }}>
                    <RatingStar value={data.rating} />
                </div>
                <div className="text-gray-500">
                    {data.create_date}
                </div>
            </div>
            <p>{data.text}</p>
            {data.images.length > 0 && (
                <ThumbImagesWrapper>
                    <ul>{data.images.map(image => (<li key={image}><div className="kebunbibit-product-reviews--image-thumb" style={{ backgroundImage: `url(${image})` }} /></li>))}</ul>
                </ThumbImagesWrapper>
            )}
        </Wrapper>
    )
}

export default RowData;