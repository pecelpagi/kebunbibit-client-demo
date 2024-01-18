import { useContext } from "react";
import StyledButton from "../../components/StyledButton";
import GlobalContext from "../../provider/GlobalContext";

export default () => {
    const { shippingAddressData } = useContext(GlobalContext);

    const data = shippingAddressData.find(x => !!x.is_default);

    if (!data) return null;

    return (
        <div>
            <div className="pb-4 font-semibold border border-x-0 border-t-0 border-b-slate-200 text-sm">Alamat Pengiriman</div>
            <div className="flex flex-col gap-1 flex-1 text-sm py-4 border border-x-0 border-t-0 border-b-slate-200">
                <div className="font-semibold">{data.receiver_name}&nbsp;<span className="font-normal">({data.address_label})</span></div>
                <div>{data.phone}</div>
                <div>{`${data.address} Kel. ${data.village_name} Kec. ${data.subdistrict_name} `}</div>
                <div>{`${data.city_name}, ${data.province_name} ${data.postal_code ? `(${data.postal_code})` : ''}`}</div>
            </div>
            <div className="py-4 text-xs font-semibold flex gap-3">
                <StyledButton type="button" outlined>Pilih Alamat Lain</StyledButton>
                <StyledButton type="button" outlined>Tambah Alamat Baru</StyledButton>
            </div>
        </div>
    );
}