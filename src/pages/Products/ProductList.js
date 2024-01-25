import { ContentWrapper } from "./product-list.styled-components";
import ProductItem from '../../components/ProductItem';
import { useContext } from "react";
import PageContext from "./PageContext";

const ProductList = () => {
    const { products } = useContext(PageContext);

    return (
        <ContentWrapper>
            <div className="inner-wrapper">
                {products.map((x) => (<ProductItem key={x.id} data={x} />))}
            </div>
        </ContentWrapper>
    );
}

export default ProductList;
