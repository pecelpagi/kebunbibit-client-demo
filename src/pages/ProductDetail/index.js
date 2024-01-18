import React, { useEffect, useState } from 'react';
import MiddleWrapper from '../../components/MiddleWrapper';
import * as apiService from '../../data';
import Information from './Information';
import PreviewImage from './PreviewImage';
import ProductReview from './ProductReview';

const ProductDetail = (props) => {
    const [product, setProduct] = useState(null);
    const { match: { params } } = props;

    const handleFetchProductDetail = async () => {
        const res = await apiService.getProduct(params.id);

        setProduct(res.data);
    }

    useEffect(() => {
        handleFetchProductDetail();
    }, []);

    if (!product) return <div />;

    return (
        <div>
            <div className="mb-14 px-0 md:px-5">
                <MiddleWrapper>
                    <div className="grid" style={{ gridTemplateColumns: '50% 50%' }}>
                        <div>
                            <PreviewImage {...{ product }} />
                            <ProductReview productName={product.name} />
                        </div>
                        <div className='pl-8'>
                            <Information {...{ product }} />
                        </div>
                    </div>
                </MiddleWrapper>
            </div>
        </div>
    )
}

export default ProductDetail;