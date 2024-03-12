import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { PlusIcon } from '@radix-ui/react-icons';
import { createFileUrlPreview, currency } from '../../utils';
import LazyImage from '../LazyImage';
import { Wrapper } from './styles';
import StyledButton from '../StyledButton';
import QtyInput from './QtyInput';
import GlobalContext from '../../provider/GlobalContext';
import RatingStar from '../RatingStar';
import Box from '../Box';

const Index = (props) => {
    const { data, lazyLoadProps } = props;
    const { cartData } = useContext(GlobalContext);
    const cartDetail = useMemo(() => cartData.find(x => (String(x.id) === String(data.id))), [data, cartData]);
    const isAddedToCart = !!cartDetail;

    return (
        <Wrapper>
            <a href={`/product/${data.id}`}>
                <LazyImage
                    lazyLoadProps={lazyLoadProps}
                    alt="product image"
                    wrapperClassName="kebunbibit-product-img-wrapper"
                    className="kebunbibit-product-img"
                    src={createFileUrlPreview(data.thumbnail_image)}
                />
            </a>
            <Box
                css={{
                    zIndex: 0,
                    position: 'relative',
                    background: '#FFF',
                }}
                className="flex flex-col p-2"
            >
                <a href={`/product/${data.id}`} className="product-name text-sm font">{data.name}</a>
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
    lazyLoadProps: PropTypes.shape({}),
};

Index.defaultProps = {
    lazyLoadProps: {},
};

export default Index;