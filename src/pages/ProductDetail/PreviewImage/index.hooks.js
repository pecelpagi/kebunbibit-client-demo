import { useContext, useEffect, useRef, useState } from "react";
import PageContext from "../PageContext";

export const useBusinessLogic = () => {
    const { product } = useContext(PageContext);
    const [activeImage, setActiveImage] = useState(product.images.length > 0 ? product.images[0] : '');
    const [width, setWidth] = useState(0);
    const lazyImageWrapperRef = useRef(null);

    useEffect(() => {
        const elem = lazyImageWrapperRef.current.getElementsByClassName("kebunbibit-product-img-wrapper")[0];
        setWidth(elem.clientWidth);
    }, []);

    return {
        width,
        lazyImageWrapperRef,
        activeImage,
        setActiveImage,
    }
}