import { CheckIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import StyledButton from "../../components/StyledButton"
import { styled } from "../../stitches.config"
import { ShippingAddressContext } from "./ShippingAddressContext";

const Wrapper = styled('div', {
    boxShadow: '#31353b1f 0px 1px 6px 0px',
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '16px 24px',
    variants: {
        isDefault: {
            true: {
                background: '#ebffef',
                border: '1px solid $backgroundPrimary'
            },
        },
    },
});

const ShippingAddressItem = ({ data }) => {
    const { onOpenDialogToEdit } = useContext(ShippingAddressContext);

    return (
        <Wrapper className="flex flex-row gap-3 text-sm items-center" isDefault={!!data.is_default}>
            <div className="flex flex-col gap-1 flex-1">
                <div className="font-semibold">{data.address_label}</div>
                <div className="font-semibold text-base">{data.receiver_name}</div>
                <div>{data.phone}</div>
                <div>{`${data.address} Kel. ${data.village_name} Kec. ${data.subdistrict_name} `}</div>
                <div>{`${data.city_name}, ${data.province_name} ${data.postal_code ? `(${data.postal_code})` : ''}`}</div>
                <div className="flex flex-row gap-3 items-center text-xs font-semibold mt-2">
                    <StyledButton onClick={() => { onOpenDialogToEdit(data) }} type="button" variant="primary" outlined>Ubah Alamat</StyledButton>
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