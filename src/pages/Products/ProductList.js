import { ContentWrapper } from "./product-list.styled-components";
import ProductItem from '../../components/ProductItem';
import Pagination from "./Pagination";
import { useBusinessLogic } from "./product-list.hooks";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [width, setWidth] = useState(0);
    const { products, productPageCount, currentPage, onSetCurrentPage } = useBusinessLogic();

    useEffect(() => {
        const elem = document.getElementsByClassName("kebunbibit-product-img-wrapper")[0];

        if (elem) setWidth(elem.clientWidth);
    }, [products]);

    return (
        <ContentWrapper
            css={{
                '& .kebunbibit-product-img': {
                    height: `${width}px`
                }
            }}
        >
            <div className="inner-wrapper">
                {products.map((x) => (<ProductItem key={x.id} data={x} />))}
            </div>
            <Pagination totalPage={productPageCount} page={currentPage} onChange={onSetCurrentPage} />
        </ContentWrapper>
    );
}

export default ProductList;
