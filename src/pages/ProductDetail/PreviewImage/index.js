import React from 'react';
import Box from '../../../components/Box';
import LazyImage from '../../../components/LazyImage';
import { createFileUrlPreview } from '../../../utils';
import SmallImages from './SmallImages';
import { useBusinessLogic } from './index.hooks';

const PreviewImage = () => {
    const { lazyImageWrapperRef, width, activeImage, setActiveImage } = useBusinessLogic();

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
                activeImage={activeImage}
                onSelect={setActiveImage}
            />
        </Box>
    )
}

export default PreviewImage;