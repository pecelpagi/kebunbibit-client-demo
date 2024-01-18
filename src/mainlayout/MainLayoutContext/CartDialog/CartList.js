import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../../provider/GlobalContext";
import ProductItem from "../../../components/ProductItem";
import { PRODUCT_ITEM_TYPE } from "../../../components/ProductItem/enums";
import StyledButton from "../../../components/StyledButton";
import { currency, matchMediaChecker, MATCH_MEDIA_TYPE } from "../../../utils";
import { styled } from "../../../stitches.config";

const CartDataWrapper = styled('div', {
    overflow: 'auto',
    width: '100%',
    position: 'absolute',
    '@md': {
        position: 'relative',
    },
});

const FooterWrapper = styled('div', {
    padding: '15px 25px',
    position: 'absolute',
    width: '100%',
    bottom: '0',
    '@md': {
        position: 'relative',
    },
});

export default () => {
    const calculateContentHeight = () => (window.innerHeight - (matchMediaChecker(MATCH_MEDIA_TYPE.MD) ? 180 : 130));

    const [contentHeight, setContentHeight] = useState(calculateContentHeight);
    const { cartData } = useContext(GlobalContext);
    const totalResult = cartData.reduce((total, data) => (total + (data.price * data.qty)), 0);

    useEffect(() => {
        const handler = () => { setContentHeight(calculateContentHeight()); }

        window.addEventListener('resize', handler);

        return () => { window.removeEventListener('resize', handler); };
    }, []);

    return (
        <div>
            <CartDataWrapper css={{ maxHeight: `${contentHeight}px` }}>
                {cartData.map(x => (<ProductItem key={x.id} data={x} type={PRODUCT_ITEM_TYPE.CART} />))}
            </CartDataWrapper>
            <FooterWrapper className="flex">
                <div className="flex-1">
                    <span className="text-xs">Total:</span>
                    <div className="font-semibold text-sm">{currency(totalResult)}</div>
                </div>
                <div className="flex-1 text-right">
                    <StyledButton className="text-sm" css={{ height: '100%' }} type="button" variant="primary" onClick={() => { window.location.href = '/checkout' }}>Checkout</StyledButton>
                </div>
            </FooterWrapper>
        </div>
    );
}