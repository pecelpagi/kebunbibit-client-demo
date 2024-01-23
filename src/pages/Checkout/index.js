import { useRef } from 'react';
import MiddleWrapper from '../../components/MiddleWrapper'
import ShippingAddress from './ShippingAddress';
import OrderedProducts from './OrderedProducts';
import PaymentMethods from './PaymentMethods';
import StyledButton from '../../components/StyledButton';
import OrderSuccessInfo from './OrderSuccessInfo';
import CheckoutLoader from './CheckoutLoader';

const Checkout = () => {
    const orderSuccessInfo = useRef(null);
    const checkoutLoader = useRef(null);

    const handleCheckout = () => {
        checkoutLoader.current.handleShowDialog();

        setTimeout(() => {
            checkoutLoader.current.handleHideDialog();
            orderSuccessInfo.current.handleShowDialog();
        }, 2000);
    }

    return (
        <div>
            <div className="py-2 border border-x-0 border-t-0 border-b-slate-200 mb-10">
                <MiddleWrapper>
                    <a href="/"><img style={{ height: '50px' }} alt="logo" src="/images/logo.jpg" /></a>
                </MiddleWrapper>
            </div>
            <MiddleWrapper>
                <div className="flex flex-row gap-10">
                    <div className="flex-1">
                        <div className="text-2xl font-semibold mb-7">Checkout</div>
                        <ShippingAddress />
                        <PaymentMethods />
                        <div className="pt-4 flex">
                            <div className="flex-1">
                                <StyledButton className="font-semibold text-sm" type="button" outlined>Kembali ke Halaman Utama</StyledButton>
                            </div>
                            <div className="flex-1 text-right">
                                <StyledButton className="font-semibold text-sm" variant="primary" type="button" onClick={handleCheckout}>Proses Pembayaran</StyledButton>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 pb-6">
                        <OrderedProducts />
                    </div>
                </div>
            </MiddleWrapper>
            <OrderSuccessInfo ref={orderSuccessInfo} />
            <CheckoutLoader ref={checkoutLoader} />
        </div>
    );
}

export default Checkout;