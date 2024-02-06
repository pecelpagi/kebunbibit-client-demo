import React, { useContext, useMemo } from 'react';
import HtmlParser from "html-react-parser";
import Box from '../../components/Box';
import RatingStar from '../../components/RatingStar';
import { currency } from '../../utils';
import StyledButton from '../../components/StyledButton';
import { PlusIcon } from '@radix-ui/react-icons';
import { Wrapper } from './information.styled-components';
import PageContext from './PageContext';
import QtyInput from '../../components/ProductItem/QtyInput';
import GlobalContext from '../../provider/GlobalContext';

const Information = () => {
    const { cartData } = useContext(GlobalContext);
    const { product } = useContext(PageContext);

    const addedCart = useMemo(() => cartData.find(x => +x.id === +product.id), [cartData, product]);
    const isAlreadyAddedToCart = !!addedCart;

    return (
        <Wrapper className="text-xs flex flex-col gap-3">
            <Box className="uppercase font-semibold" css={{
                color: '$backgroundPrimary'
            }}>{product.category.name}</Box>
            <Box className="flex items-center gap-2">
                <span><RatingStar value={3} /></span>
                <span>(24 ulasan)</span>
            </Box>
            <Box css={{
                minHeight: '50px',
            }} className='text-2xl font-semibold'>
                {product.name}
            </Box>
            <Box className='text-gray-500 font-semibold text-sm'>500 gr</Box>
            <Box
                css={{
                    color: "#F04630"
                }}
                className='text-2xl font-semibold'
            >{currency(product.price)}</Box>
            {!isAlreadyAddedToCart && <StyledButton
                css={{
                    maxWidth: '250px'
                }}
                className="text-sm font-semibold"
                type="button"
                variant="primary">
                <span className="flex items-center justify-center gap-1"><PlusIcon />Tambah ke Keranjang</span>
            </StyledButton>}
            {isAlreadyAddedToCart && <Box
                css={{ maxWidth: '200px' }}
            >
                <QtyInput value={addedCart.qty} productId={product.id} />
            </Box>}
            <Box className='text-base mt-3 leading-7'>
                {HtmlParser(product.description)}
            </Box>
        </Wrapper>
    )
}

export default Information;
