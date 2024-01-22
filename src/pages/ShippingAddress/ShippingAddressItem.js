import { CheckIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import StyledButton from "../../components/StyledButton"
import PageContext from "./PageContext";
import { Wrapper } from "./shipping-address-item.styled-components";

const ShippingAddressItem = ({ data }) => {
    const { onOpenDialog } = useContext(PageContext);

    return (
        <Wrapper className="flex flex-row gap-3 text-sm items-center" isDefault={!!data.is_default}>
            <div className="flex flex-col gap-1 flex-1">
                <div className="font-semibold">{data.address_label}</div>
                <div className="font-semibold text-base">{data.receiver_name}</div>
                <div>{data.phone}</div>
                <div>{`${data.address} Kel. ${data.village_name} Kec. ${data.subdistrict_name} `}</div>
                <div>{`${data.city_name}, ${data.province_name} ${data.postal_code ? `(${data.postal_code})` : ''}`}</div>
                <div className="flex flex-row gap-3 items-center text-xs font-semibold mt-2">
                    <StyledButton onClick={() => { onOpenDialog(data) }} type="button" variant="primary" outlined>Ubah Alamat</StyledButton>
                    <div style={{ width: '2px', height: '18px', background: '#e5e7e9' }} />
                    <button className="text-red-500" type="button">Hapus</button>
                </div>
            </div>
            <div>
                {!data.is_default ? (
                    <StyledButton className="text-xs font-semibold" type="button" variant="primary" outlined onClick={() => { }}>Jadikan Alamat Utama</StyledButton>
                ) : (
                    <div className="text-lime-500">
                        <CheckIcon
                            {...{
                                height: 36,
                                width: 36,
                            }}
                        />
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default ShippingAddressItem;