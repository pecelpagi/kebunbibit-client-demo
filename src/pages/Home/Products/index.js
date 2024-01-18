import { useEffect, useState } from 'react';
import ProductItem from '../../../components/ProductItem';
import StyledButton from '../../../components/StyledButton';
import { styled } from '../../../stitches.config';
import { handleFetchProducts } from './utils';

const ContentWrapper = styled('div', {
    overflowX: 'auto',
    padding: '5px',
    '& .inner-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        width: '100%',
        minWidth: '1200px',
    },
});

export default ({ type }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleFetchProducts(setProducts);
    }, []);

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