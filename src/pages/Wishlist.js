import { useContext } from 'react';
import GlobalContext from '../provider/GlobalContext';
import ProductItem from '../components/ProductItem';
import { styled } from '../stitches.config';

const ContentWrapper = styled('div', {
    '& .inner-wrapper': {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 20%)',
        width: '100%',
        '& .product-item-wrapper': {
            padding: '6px',
        },
    },
});

const Wishlist = () => {
    const { wishlistData } = useContext(GlobalContext);

    console.log('DEBUG-WISHLIST: ', wishlistData);

    return (
        <div className="flex flex-col">
            <div className="text-base font-semibold border-b p-4">
                <div>Wishlist</div>
            </div>
            <div className="flex flex-col p-4 gap-4">
                <ContentWrapper>
                    <div className="inner-wrapper">
                        {wishlistData.map((x) => (<div key={x.id} className='product-item-wrapper'><ProductItem key={x.id} data={x} /></div>))}
                    </div>
                </ContentWrapper>
            </div>
        </div>
    );
}

export default Wishlist;