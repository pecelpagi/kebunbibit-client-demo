import React from 'react';
import Box from '../../../components/Box';
import RatingStar from '../../../components/RatingStar';
import { ThumbImagesWrapper, Wrapper } from './row-data.styled-components';

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
                    <ul>
                        {data.images.map(image => (
                            <li key={image}>
                                <div
                                    className="kebunbibit-product-reviews--image-thumb"
                                    style={{ backgroundImage: `url(/images/mock-reviews/${image})` }}
                                />
                            </li>
                        ))}
                    </ul>
                </ThumbImagesWrapper>
            )}
        </Wrapper>
    )
}

export default RowData;