import React from "react";
import { currency } from "../../../utils";
import OrderStatusLabel from "../OrderStatusLabel";
import ProductItem from "./ProductItem";
import { useBusinessLogic } from "./display-data.hooks";
import { SectionBox, StyledWrapper } from "./display-data.styled-components";

const DisplayData = () => {
    const {
        orderDetailData,
        contentHeight,
        productQtyTotal
    } = useBusinessLogic();
    const { shipping_address } = orderDetailData;

    return (
        <StyledWrapper css={{ maxHeight: `${contentHeight}px` }}>
            <SectionBox>
                <div className="grid text-sm items-center" style={{ gridTemplateColumns: '50% 50%' }}>
                    <div>Status Pesanan</div>
                    <div className="text-right"><OrderStatusLabel /></div>
                </div>
            </SectionBox>
            <SectionBox>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex-col gap-1 flex text-sm">
                            <div className="font-semibold">Informasi Pesanan</div>
                            <div>—</div>
                        </div>
                        <div className="border border-slate-300 border-dashed p-3 text-sm gap-3 flex flex-col">
                            <div className="grid" style={{ gridTemplateColumns: '32% 5% 63%' }}>
                                <div>Nomor Pesanan</div>
                                <div>:</div>
                                <div className="text-right font-semibold">{orderDetailData.order_number}</div>
                            </div>
                            <div className="grid" style={{ gridTemplateColumns: '32% 5% 63%' }}>
                                <div>Tanggal Pembelian</div>
                                <div>:</div>
                                <div className="text-right">{orderDetailData.created_at}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex-col gap-1 flex text-sm">
                            <div className="font-semibold">Informasi Pengiriman</div>
                            <div>—</div>
                        </div>
                        <div className="border border-slate-300 border-dashed p-3 text-sm gap-3 flex flex-col">
                            <div className="grid" style={{ gridTemplateColumns: '32% 5% 63%' }}>
                                <div>Nama Penerima</div>
                                <div>:</div>
                                <div className="text-right font-semibold">{shipping_address.receiver_name}</div>
                            </div>
                            <div className="grid" style={{ gridTemplateColumns: '32% 5% 63%' }}>
                                <div>Alamat Pengiriman</div>
                                <div>:</div>
                                <div className="text-right">
                                    <div>{shipping_address.address}</div>
                                    <div>{`Kel. ${shipping_address.village_name} Kec. ${shipping_address.subdistrict_name}`}</div>
                                    <div>{`${shipping_address.city_name}, ${shipping_address.province_name}${!shipping_address.postal_code ? '' : `, ${shipping_address.postal_code}`}`}</div>
                                </div>
                            </div>
                            <div className="grid" style={{ gridTemplateColumns: '32% 5% 63%' }}>
                                <div>Telepon</div>
                                <div>:</div>
                                <div className="text-right">{shipping_address.phone}</div>
                            </div>
                            <div className="grid" style={{ gridTemplateColumns: '32% 5% 63%' }}>
                                <div>Kurir</div>
                                <div>:</div>
                                <div className="text-right">SiCepat - Regular Package</div>
                            </div>
                            <div className="grid" style={{ gridTemplateColumns: '32% 5% 63%' }}>
                                <div>No Resi</div>
                                <div>:</div>
                                <div className="text-right">Menunggu Pengiriman</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionBox>
            <SectionBox>
                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex-col gap-1 flex text-sm">
                        <div className="font-semibold">Detail Produk</div>
                        <div>—</div>
                    </div>

                    {orderDetailData.products.map(x => (<ProductItem data={x} />))}
                </div>
            </SectionBox>
            <SectionBox>
                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex-col gap-1 flex text-sm">
                        <div className="font-semibold">Rincian Pembayaran</div>
                        <div>—</div>
                    </div>
                    <div className="text-sm gap-3 flex flex-col">
                        <div className="grid" style={{ gridTemplateColumns: '37% 63%' }}>
                            <div>Metode Pembayaran</div>
                            <div className="text-right">BCA Virtual Account</div>
                        </div>
                        <div className="border-b border-slate-300 border-dashed" />
                        <div className="grid" style={{ gridTemplateColumns: '37% 63%' }}>
                            <div>Total Harga ({productQtyTotal} barang)</div>
                            <div className="text-right">{currency(orderDetailData.order_total)}</div>
                        </div>
                        <div className="grid" style={{ gridTemplateColumns: '37% 63%' }}>
                            <div>Biaya Pengiriman (5 kg)</div>
                            <div className="text-right">{currency(0)}</div>
                        </div>
                        <div className="border-b border-slate-300 border-dashed" />
                        <div className="grid font-semibold mb-4" style={{ gridTemplateColumns: '37% 63%' }}>
                            <div>Total Belanja</div>
                            <div className="text-right">{currency(orderDetailData.order_total)}</div>
                        </div>
                    </div>
                </div>
            </SectionBox>
        </StyledWrapper>
    );
}

export default React.memo(DisplayData);