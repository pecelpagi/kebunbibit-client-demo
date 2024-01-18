import React, { useEffect, useRef, useState } from 'react';
import Box from '../../../components/Box';
import LazyImage from '../../../components/LazyImage';
import { createFileUrlPreview } from '../../../utils';
import SmallImages from './SmallImages';

const PreviewImage = ({ product }) => {
    const [activeImage, setActiveImage] = useState(product.images.length > 0 ? product.images[0] : '');
    const [width, setWidth] = useState(0);
    const lazyImageWrapperRef = useRef(null);

    useEffect(() => {
        const elem = lazyImageWrapperRef.current.getElementsByClassName("kebunbibit-product-img-wrapper")[0];
        setWidth(elem.clientWidth);
    }, [])

    return (
        <Box
            ref={lazyImageWrapperRef}
            css={{
                '.kebunbibit-product-img-wrapper': {
                    maxWidth: '450px',
                    height: `${width}px`,
                    paddingBottom: 'unset',
                    '.kebunbibit-lazy-image-placeholder, .kebunbibit-product-img': {
                        borderRadius: '8px'
                    }
                }
            }}
        >
            <LazyImage
                alt="product image"
                wrapperClassName="kebunbibit-product-img-wrapper"
                className="kebunbibit-product-img"
                src={createFileUrlPreview(activeImage)}
                lazyLoadProps={{ overflow: true }}
            />
            <SmallImages
                parentWidth={width}
                images={product.images}
                activeImage={activeImage}
                onSelect={setActiveImage}
            />
        </Box>
    )
}

export default PreviewImage;