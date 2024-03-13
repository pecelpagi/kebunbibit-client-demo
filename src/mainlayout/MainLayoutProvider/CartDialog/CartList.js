import Box from "../../../components/Box";
import StyledButton from "../../../components/StyledButton";
import Spinner from "../../../components/Spinner";
import { currency } from "../../../utils";
import { CartDataWrapper, FooterWrapper } from "./cart-list.styled-components";
import { useBusinessLogic } from "./cart-list.hooks";
import ProductItem from "./ProductItem";

const CartList = () => {
    const { contentHeight, cartData, cartTotal, isFetchingCart } = useBusinessLogic();

    return (
        <div>
            <CartDataWrapper css={{ maxHeight: `${contentHeight}px` }}>
                {cartData.map(x => (<ProductItem key={x.id} data={x} />))}
            </CartDataWrapper>
            <FooterWrapper className="flex">
                <div className="flex-1">
                    <span className="text-xs">Total:</span>
                    <div className="font-semibold text-sm">{currency(cartTotal)}</div>
                </div>
                <div className="flex-none text-right">
                    {isFetchingCart && (
                        <Box
                            className="cursor-not-allowed"
                            css={{
                                '& .spinner-overlay': {
                                    borderRadius: '0.25rem',
                                },
                                '& .spinner-container': {
                                    height: 25,
                                    width: 25,
                                },
                                width: 97.3,
                                borderRadius: '0.25rem',
                                height: '100%',
                                position: 'relative',
                                backgroundColor: '$backgroundPrimary',
                                color: '$colorPrimary',
                                border: '1px solid $backgroundPrimary',
                            }}
                        >
                            <Spinner isAbsolute text="" />
                        </Box>
                    )}
                    {!isFetchingCart && (
                        <StyledButton
                            className="text-sm"
                            css={{ height: '100%' }}
                            type="button"
                            variant="primary"
                            onClick={() => { window.location.href = '/checkout' }}>Checkout</StyledButton>
                    )}
                </div>
            </FooterWrapper>
        </div>
    );
}

export default CartList;