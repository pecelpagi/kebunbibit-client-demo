import { useContext } from 'react';
import ProductItem from '../../../components/ProductItem';
import PageContext from '../PageContext';
import { ContentWrapper } from './index.styled-components';

const OtherProducts = () => {
    const { otherProducts } = useContext(PageContext);

    return (
        <div>
            <div className="flex mb-4 items-center">
                <h4 className="text-base font-semibold flex-1">Produk Lainnya</h4>
            </div>
            <ContentWrapper>
                <div className="inner-wrapper">
                    {otherProducts.map((x) => (<ProductItem lazyLoadProps={{ offset: 165 }} key={x.id} data={x} />))}
                </div>
            </ContentWrapper>
        </div>
    )
}

export default OtherProducts;