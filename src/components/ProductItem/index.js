import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { createFileUrlPreview, currency } from '../../utils';
import LazyImage from '../LazyImage';
import { Wrapper } from './styles';
import StyledButton from '../StyledButton';
import { PRODUCT_ITEM_TYPE } from './enums';
import QtyInput from './QtyInput';
import GlobalContext from '../../provider/GlobalContext';
import { styled } from '../../stitches.config';
import RatingStar from '../RatingStar';
import Box from '../Box';

const QtyInputWrapper = styled('div', {
    width: '150px',
    '& button': {
        height: '32px',
        padding: '0px',
        width: '34px',
    },
    '& input': {
        flex: '1 1 0%',
        height: '32px',
    }
})

const Index = (props) => {
    const { data, type } = props;
    const { cartData } = useContext(GlobalContext);
    const cartDetail = useMemo(() => cartData.find(x => (String(x.id) === String(data.id))), [data, cartData]);
    const isAddedToCart = !!cartDetail;

    if (type === PRODUCT_ITEM_TYPE.CART) {
        return (
            <Wrapper type="cart">
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
        );
    }

    return (
        <Wrapper>
            <Link to={`/product/${data.id}`}>
                <LazyImage
                    alt="product image"
                    wrapperClassName="kebunbibit-product-img-wrapper"
                    className="kebunbibit-product-img"
                    src={createFileUrlPreview(data.thumbnail_image)}
                />
            </Link>
            <Box
                css={{
                    zIndex: 0,
                    position: 'relative',
                    background: '#FFF',
                }}
                className="flex flex-col p-2"
            >
                <Link to={`/product/${data.id}`} className="product-name text-sm font">{data.name}</Link>
                <div className="text-xs font-semibold" style={{ color: '#9295A6', }}>500 gr</div>
                <div className="product-price text-sm mb-2">{currency(data.price)}</div>
                <div className="flex text-xs gap-2 mb-2">
                    <div><RatingStar value={3} /></div>
                    <span>(24)</span>
                </div>
                {!isAddedToCart && (
                    <StyledButton
                        className="text-sm font-semibold"
                        type="button"
                        variant="primary">
                        <span className="flex items-center justify-center gap-1"><PlusIcon />Tambah</span>
                    </StyledButton>
                )}
                {isAddedToCart && (<QtyInput value={cartDetail.qty} productId={data.id} />)}
            </Box>
        </Wrapper>
    )
}

Index.propTypes = {
    data: PropTypes.shape({}).isRequired,
    type: PropTypes.string,
};

Index.defaultProps = {
    type: PRODUCT_ITEM_TYPE.DEFAULT,
};

export default Index;