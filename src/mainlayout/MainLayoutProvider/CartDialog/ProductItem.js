import React, { useContext, useMemo } from 'react'
import { TrashIcon } from '@radix-ui/react-icons';
import { QtyInputWrapper, Wrapper } from './product-item.styled-components'
import { Link } from 'react-router-dom';
import LazyImage from '../../../components/LazyImage';
import { createFileUrlPreview, currency } from '../../../utils';
import QtyInput from '../../../components/ProductItem/QtyInput';
import GlobalContext from '../../../provider/GlobalContext';

const ProductItem = ({ data }) => {
    const { cartData } = useContext(GlobalContext);
    const cartDetail = useMemo(() => cartData.find(x => (String(x.id) === String(data.id))), [data, cartData]);

    return (
        <Wrapper>
            <Link className="flex-1" to={`/product/${data.id}`}>
                <LazyImage
                    alt="product image"
                    wrapperClassName="kebunbibit-product-img-wrapper"
                    className="kebunbibit-product-img"
                    src={createFileUrlPreview(data.thumbnail_image)}
                    lazyLoadProps={{ overflow: true }}
                />
            </Link>
            <div style={{ flex: '4 1 0%' }} className="flex flex-col">
                <a href={`/product/${data.id}`} className="product-name text-sm font">{data.name}</a>
                <div className="flex flex-row text-sm gap-1 mb-3">
                    <div className="product-price">{currency(data.price)}</div>
                    <div className="font-semibold" style={{ color: '#9295A6' }}>/ 500 gr</div>
                </div>
                <hr className="mb-4" />
                <div className="flex items-center">
                    <div className="font-semibold flex-1">{currency(data.price * cartDetail.qty)}</div>
                    <div className="flex gap-3">
                        <button
                            type="button" style={{ color: '#ff6b6b', height: '32px' }}><TrashIcon height={22} width={22} /></button>
                        <QtyInputWrapper>
                            <QtyInput value={cartDetail.qty} productId={data.id} />
                        </QtyInputWrapper>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductItem