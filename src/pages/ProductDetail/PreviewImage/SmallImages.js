import React, { useContext } from "react";
import LazyImage from "../../../components/LazyImage";
import { createFileUrlPreview } from "../../../utils";
import { ImgWrapper } from "./small-images.styled-components";
import PageContext from "../PageContext";

const SmallImages = ({ onSelect, activeImage, parentWidth }) => {
    const { product } = useContext(PageContext);
    const { images } = product;

    return (
        <div className="grid mt-3 gap-2" style={{ gridTemplateColumns: 'repeat(5, 20%)', maxWidth: `${parentWidth}px` }}>
            {images.map(x => (
                <ImgWrapper key={x} css={{
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
};

export default SmallImages;
