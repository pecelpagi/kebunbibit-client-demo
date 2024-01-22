import { Controller } from "react-hook-form";
import StyledButton from "../../../components/StyledButton";
import InputText from '../../../components/InputText';
import SelectProvince from './SelectProvince';
import SelectCity from './SelectCity';
import SelectSubDistrict from './SelectSubDistrict';
import SelectVillage from './SelectVillage';
import InputTextArea from "../../../components/InputTextArea";
import ErrorText from "../../../components/ErrorText";
import { useBusinessLogic } from "./form.hooks";
import { StyledForm } from "./form.styled-components";

const Form = () => {
    const {
        addressData,
        contentHeight,
        register,
        errors,
        control,
        onSubmit,
    } = useBusinessLogic();

    return (
        <StyledForm css={{ maxHeight: `${contentHeight}px` }} className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
                <InputText
                    label="Label Alamat"
                    defaultValue={addressData ? addressData.address_label : ''}
                    isInvalid={!!errors.address_label}
                    {...register("address_label", {
                        required: true
                    })}
                />
                {errors.address_label && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Nama Penerima"
                    defaultValue={addressData ? addressData.receiver_name : ''}
                    isInvalid={!!errors.receiver_name}
                    {...register("receiver_name", {
                        required: true
                    })}
                />
                {errors.receiver_name && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Telepon"
                    defaultValue={addressData ? addressData.phone : ''}
                    isInvalid={!!errors.phone}
                    {...register("phone", {
                        required: true
                    })}
                />
                {errors.phone && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputTextArea
                    label="Alamat"
                    defaultValue={addressData ? addressData.address : ''}
                    isInvalid={!!errors.address}
                    {...register("address", {
                        required: true
                    })}
                />
                {errors.address && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <Controller
                    control={control}
                    name="province_id"
                    render={({ field: { onChange } }) => (
                        <SelectProvince
                            {...{ control, onChange }}
                            isInvalid={!!errors.province_id}
                        />
                    )}
                />
                {errors.province_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <Controller
                    control={control}
                    name="city_id"
                    render={({ field: { onChange } }) => (
                        <SelectCity
                            {...{ control, onChange }}
                            isInvalid={!!errors.city_id}
                        />
                    )}
                />
                {errors.city_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <Controller
                    control={control}
                    name="subdistrict_id"
                    render={({ field: { onChange } }) => (
                        <SelectSubDistrict
                            {...{ control, onChange }}
                            isInvalid={!!errors.subdistrict_id}
                        />
                    )}
                />
                {errors.subdistrict_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <Controller
                    control={control}
                    name="village_id"
                    render={({ field: { onChange } }) => (
                        <SelectVillage
                            {...{ control, onChange }}
                            isInvalid={!!errors.village_id}
                        />
                    )}
                />
                {errors.village_id && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Kode Pos"
                    name="postal_code"
                    defaultValue={addressData ? addressData.postal_code : ''}
                    {...register("postal_code")}
                />
            </div>
            <div>
                <StyledButton className="w-full" type="submit" variant="primary">Simpan</StyledButton>
            </div>
        </StyledForm>
    );
}

export default Form;