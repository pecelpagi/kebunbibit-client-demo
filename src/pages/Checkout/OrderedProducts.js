import { useContext } from "react";
import GlobalContext from "../../provider/GlobalContext";
import { currency } from "../../utils";
import OrderedProductItem from "./OrderedProductItem";

const OrderedProducts = () => {
    const { cartData } = useContext(GlobalContext);
    const totalResult = cartData.reduce((total, data) => (total + (data.price * data.qty)), 0);

    return (
        <div className="border text-black">
            <div style={{ padding: 12 }} className="text-sm font-semibold border-b">
                <div>Ringkasan Pesanan</div>
            </div>
            {cartData.map(x => <OrderedProductItem key={x.id} data={x} />)}
            <div style={{ padding: 12 }} className="flex text-sm border-t">
                <div className="flex-1">Subtotal</div>
                <div className="flex-1 text-right">{currency(totalResult)}</div>
            </div>
            <div style={{ padding: 12 }} className="flex text-sm">
                <div className="flex-1">Biaya Pengiriman</div>
                <div className="flex-1 text-right">{currency(0)}</div>
            </div>
            <div style={{ padding: 12 }} className="flex text-base font-semibold">
                <div className="flex-1">Total Tagihan</div>
                <div className="flex-1 text-right">{currency(totalResult)}</div>
            </div>
        </div>
    );
}

export default OrderedProducts;