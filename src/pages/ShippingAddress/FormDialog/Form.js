import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StyledButton from "../../../components/StyledButton";
import InputText from '../../../components/InputText';
import SelectProvince from './SelectProvince';
import SelectRegency from './SelectRegency';
import SelectSubDistrict from './SelectSubDistrict';
import SelectVillage from './SelectVillage';
import { matchMediaChecker, MATCH_MEDIA_TYPE } from "../../../utils";
import { styled } from "../../../stitches.config";
import InputTextArea from "../../../components/InputTextArea";
import ErrorText from "../../../components/ErrorText";
import { ShippingAddressContext } from '../ShippingAddressContext';

const StyledForm = styled('form', {
    overflow: 'auto',
    width: '100%',
    padding: '15px 25px 25px 25px',
    position: 'absolute',
    '@md': {
        position: 'relative',
    },
});

export default () => {
    const { detailData, onSaveData } = useContext(ShippingAddressContext);
    const { control, register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

    const provinceId = watch('province_id');
    const cityId = watch('city_id');
    const subDistrictId = watch('subdistrict_id');
    const villageId = watch('village_id');

    const changeProvinceListener = () => {
        setValue("city_id", "");
        setValue("subdistrict_id", "");
        setValue("village_id", "");
    }

    const changeCityListener = () => {
        setValue("subdistrict_id", "");
        setValue("village_id", "");
    }

    const changeSubdistrictListener = () => {
        setValue("village_id", "");
    }

    useEffect(() => {
        let newProvinceId = '',
            newCityId = '',
            newSubDistrictId = '',
            newVillageId = '';

        if (detailData) ({ province_id: newProvinceId, city_id: newCityId, subdistrict_id: newSubDistrictId, village_id: newVillageId } = detailData);

        setValue("province_id", newProvinceId);
        setValue("city_id", newCityId);
        setValue("subdistrict_id", newSubDistrictId);
        setValue("village_id", newVillageId);
    }, [JSON.stringify(detailData)]);

    const calculateContentHeight = () => (window.innerHeight - (matchMediaChecker(MATCH_MEDIA_TYPE.MD) ? 120 : 65));

    const [contentHeight, setContentHeight] = useState(calculateContentHeight);

    useEffect(() => {
        const handler = () => { setContentHeight(calculateContentHeight()); }

        window.addEventListener('resize', handler);

        return () => { window.removeEventListener('resize', handler); };
    }, []);

    return (
        <StyledForm css={{ maxHeight: `${contentHeight}px` }} className="flex flex-col gap-4" onSubmit={handleSubmit(onSaveData)}>
            <div>
                <InputText
                    label="Label Alamat"
                    name="address_label"
                    required
                    defaultValue={detailData ? detailData.address_label : ''}
                    isInvalid={!!errors.address_label}
                    {...{ register }}
                />
                {errors.address_label && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Nama Penerima"
                    name="receiver_name"
                    required
                    defaultValue={detailData ? detailData.receiver_name : ''}
                    isInvalid={!!errors.receiver_name}
                    {...{ register }}
                />
                {errors.receiver_name && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Telepon"
                    name="phone"
                    required
                    defaultValue={detailData ? detailData.phone : ''}
                    isInvalid={!!errors.phone}
                    {...{ register }}
                />
                {errors.phone && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputTextArea
                    label="Alamat"
                    name="address"
                    required
                    defaultValue={detailData ? detailData.address : ''}
                    {...{ register }}
                    isInvalid={!!errors.address}
                />
                {errors.address && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <SelectProvince
                    {...{ control }}
                    changeEvent={changeProvinceListener}
                    isInvalid={!!errors.province_id}
                />
                {errors.province_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <SelectRegency
                    {...{ control, provinceId }}
                    changeEvent={changeCityListener}
                    isInvalid={!!errors.city_id}
                    value={cityId}
                />
                {errors.city_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <SelectSubDistrict
                    {...{ control, cityId }}
                    changeEvent={changeSubdistrictListener}
                    value={subDistrictId}
                    isInvalid={!!errors.subdistrict_id}
                />
                {errors.subdistrict_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <SelectVillage
                    {...{ control, subDistrictId }}
                    value={villageId}
                    isInvalid={!!errors.village_id}
                />
                {errors.village_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Kode Pos"
                    name="postal_code"
                    defaultValue={detailData ? detailData.postal_code : ''}
                    {...{ register }}
                />
            </div>
            <div>
                <StyledButton className="w-full" type="submit" variant="primary">Simpan</StyledButton>
            </div>
        </StyledForm>
    );
}