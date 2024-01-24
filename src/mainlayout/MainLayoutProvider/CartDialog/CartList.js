import ProductItem from "../../../components/ProductItem";
import { PRODUCT_ITEM_TYPE } from "../../../components/ProductItem/enums";
import StyledButton from "../../../components/StyledButton";
import { currency } from "../../../utils";
import { CartDataWrapper, FooterWrapper } from "./cart-list.styled-components";
import { useBusinessLogic } from "./cart-list.hooks";

const CartList = () => {
    const { contentHeight, cartData, cartTotal } = useBusinessLogic();

    return (
        <div>
            <CartDataWrapper css={{ maxHeight: `${contentHeight}px` }}>
                {cartData.map(x => (<ProductItem key={x.id} data={x} type={PRODUCT_ITEM_TYPE.CART} />))}
            </CartDataWrapper>
            <FooterWrapper className="flex">
                <div className="flex-1">
                    <span className="text-xs">Total:</span>
                    <div className="font-semibold text-sm">{currency(cartTotal)}</div>
                </div>
                <div className="flex-1 text-right">
                    <StyledButton
                        className="text-sm"
                        css={{ height: '100%' }}
                        type="button"
                        variant="primary"
                        onClick={() => { window.location.href = '/checkout' }}>Checkout</StyledButton>
                </div>
            </FooterWrapper>
        </div>
    );
}

export default CartList;