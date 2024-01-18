import React from "react";
import LazyImage from "../../../components/LazyImage";
import { styled } from "../../../stitches.config";
import { createFileUrlPreview } from "../../../utils";

const ImgWrapper = styled('div', {
    '.kebunbibit-product-img': {
        border: '3px solid transparent',
    },
    borderRadius: '8px',
    width: '100%',
    cursor: 'pointer',

    variants: {
        active: {
            true: {
                '.kebunbibit-product-img': {
                    borderColor: '$backgroundPrimary',
                }
            }
        }
    },
});

const SmallImages = ({ images, onSelect, activeImage, parentWidth }) => (
    <div className="grid mt-3 gap-2" style={{ gridTemplateColumns: 'repeat(5, 20%)', maxWidth: `${parentWidth}px` }}>
        {images.map(x => (
            <ImgWrapper css={{
                '.kebunbibit-product-img-wrapper': {
                    maxWidth: '450px',
                    height: `${parentWidth / 5}px`,
                    paddingBottom: 'unset',
                    '.kebunbibit-product-img': {
                        height: `${parentWidth / 5}px`,
                    }
                }
            }} onMouseEnter={() => { onSelect(x); }} active={x === activeImage}>
                <LazyImage
                    alt="product image"
                    wrapperClassName="kebunbibit-product-img-wrapper"
                    className="kebunbibit-product-img"
                    src={createFileUrlPreview(x)}
                    lazyLoadProps={{ overflow: true }}
                />
            </ImgWrapper>
        ))}
    </div>
);

export default SmallImages;
