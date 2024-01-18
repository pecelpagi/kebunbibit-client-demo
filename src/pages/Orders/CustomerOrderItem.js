import { useContext } from "react";
import StyledButton from "../../components/StyledButton";
import { styled } from "../../stitches.config"
import { currency } from "../../utils";
import OrderStatusLabel from "./OrderStatusLabel";
import { PageContext } from "./PageContext";

const Wrapper = styled('div', {
    boxShadow: '#31353b1f 0px 1px 6px 0px',
    borderRadius: '8px',
    variants: {
        isDefault: {
            true: {
                background: '#ebffef',
            },
        },
    },
    '& .inner-wrapper': {
        padding: '16px 24px',
    }
});

const Box = styled('div', {});

const CustomerOrderItem = ({ data }) => {
    const { onOpenOrderDetail } = useContext(PageContext);

    return (
        <Wrapper className="flex flex-col text-sm">
            <div className="flex flex-row gap-4 inner-wrapper">
                <div className="flex-1 flex-col gap-1 flex">
                    <div className="font-semibold">Nomor Pesanan</div>
                    <div>—</div>
                    <div className="font-semibold">{data.order_number}</div>
                    <div>{data.created_at}</div>
                </div>
                <div className="flex-1 flex-col gap-1 flex">
                    <div className="font-semibold">Status Pesanan</div>
                    <div>—</div>
                    <OrderStatusLabel />
                </div>
                <div className="flex-1 flex-col gap-1 flex">
                    <div className="font-semibold">Metode Pembayaran</div>
                    <div>—</div>
                    <div className="font-semibold">BCA Virtual Account</div>
                </div>
                <div className="flex-1 flex-col gap-1 flex">
                    <div className="font-semibold">Total Pembayaran</div>
                    <div>—</div>
                    <div className="font-semibold">{currency(data.payment_total)}</div>
                </div>
            </div>
            <Box className="flex inner-wrapper" css={{
                background: '#f5f5f5',
            }}>
                <div className="flex-1">
                    <div>Daftar Barang</div>
                    <div className="font-semibold">{data.shorten_products}</div>
                </div>
                <div className="flex-1 font-semibold text-sm justify-end flex items-center">
                    <StyledButton css={{ height: 'fit-content' }} onClick={() => { onOpenOrderDetail(data); }} type="button" variant="primary">Lihat Detail Pesanan</StyledButton>
                </div>
            </Box>
        </Wrapper>
    )
}

export default CustomerOrderItem;