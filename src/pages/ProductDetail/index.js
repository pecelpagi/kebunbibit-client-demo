import React from 'react';
import MiddleWrapper from '../../components/MiddleWrapper';
import Information from './Information';
import PreviewImage from './PreviewImage';
import ProductReview from './ProductReview';
import PageContextProvider from './PageContextProvider';
import OtherProducts from './OtherProducts';

const ProductDetail = (props) => {
    return (
        <PageContextProvider {...props}>
            <div>
                <div className="mb-14 px-0 md:px-5">
                    <MiddleWrapper>
                        <div className="grid" style={{ gridTemplateColumns: '50% 50%', marginBottom: 50 }}>
                            <div>
                                <PreviewImage />
                                <ProductReview />
                            </div>
                            <div className='pl-8'>
                                <Information />
                            </div>
                        </div>
                        <OtherProducts />
                    </MiddleWrapper>
                </div>
            </div>
        </PageContextProvider>
    )
}

export default ProductDetail;