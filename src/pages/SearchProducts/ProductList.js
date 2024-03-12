import { ContentWrapper } from "./product-list.styled-components";
import ProductItem from '../../components/ProductItem';
import Pagination from "./Pagination";
import { useBusinessLogic } from "./product-list.hooks";

const ProductList = () => {
    const { products, productPageCount, currentPage, onSetCurrentPage } = useBusinessLogic();

    return (
        <ContentWrapper>
            <div className="inner-wrapper">
                {products.map((x) => (<ProductItem key={x.id} data={x} />))}
            </div>
            <Pagination totalPage={productPageCount} page={currentPage} onChange={onSetCurrentPage} />
        </ContentWrapper>
    );
}

export default ProductList;
