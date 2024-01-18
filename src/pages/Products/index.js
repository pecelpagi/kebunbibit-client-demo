import { useEffect, useState } from "react";
import { styled } from "../../stitches.config";
import MiddleWrapper from "../../components/MiddleWrapper";
import SortingData from "./SortingData";
import { handleFetchAll } from "./utils";
import ProductItem from '../../components/ProductItem';

const ContentWrapper = styled('div', {
    '& .inner-wrapper': {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, auto)',
        gap: '25px',
        '& > div': {
            maxWidth: '236px',
        }
    },
});

const Products = (props) => {
    const [pageCount, setPageCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const { match: { params } } = props;

    useEffect(() => {
        handleFetchAll(params.slug, (res) => {
            setCategory(res.category);
            setProducts(res.product.data);
            setPageCount(res.product.pageCount);
        });
    }, [params.slug]);

    return (
        <div>
            <div className="mb-14 px-0 md:px-5">
                <MiddleWrapper>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 flex gap-2 flex-col">
                            <h5 className="text-2xl font-semibold">{category ? category.name : ''}</h5>
                            <span className="text-sm text-gray-400">Menampilkan 38 produk</span>
                        </div>
                        <div>
                            <div className="flex flex-row text-sm items-center gap-2">
                                <div>
                                    Urutkan:
                                </div>
                                <div>
                                    <SortingData />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContentWrapper>
                        <div className="inner-wrapper">
                            {products.map((x) => (<ProductItem key={x.id} data={x} />))}
                        </div>
                    </ContentWrapper>
                </MiddleWrapper>
            </div>
        </div>
    );
}

export default Products;
