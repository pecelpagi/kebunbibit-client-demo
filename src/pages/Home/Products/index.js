import { useContext } from 'react';
import ProductItem from '../../../components/ProductItem';
import StyledButton from '../../../components/StyledButton';
import PageContext from '../PageContext';
import { ContentWrapper } from './index.styled-components';

const Products = ({ type }) => {
    const { products } = useContext(PageContext);

    return (
        <div>
            <div className="flex mb-4 items-center">
                <h4 className="text-base font-semibold flex-1">Tanaman {type === 'popular' ? 'Populer' : 'Terbaru'}</h4>
                <div className="text-right flex-1">
                    <StyledButton type="button" className="text-xs py-1 px-2" variant="primary">Lihat Semua</StyledButton>
                </div>
            </div>
            <ContentWrapper>
                <div className="inner-wrapper">
                    {products.map((x) => (<ProductItem key={x.id} data={x} />))}
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Products;