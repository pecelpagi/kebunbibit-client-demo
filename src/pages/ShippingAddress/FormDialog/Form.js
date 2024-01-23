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
        contentHeight,
        errors,
        control,
        onSubmit,
    } = useBusinessLogic();

    return (
        <StyledForm css={{ maxHeight: `${contentHeight}px` }} className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
                <Controller
                    control={control}
                    name="address_label"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <InputText
                            label="Label Alamat"
                            isInvalid={!!errors.address_label}
                            {...{ onChange, value }}
                        />
                    )}
                />
                {errors.address_label && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <Controller
                    control={control}
                    name="receiver_name"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <InputText
                            label="Nama Penerima"
                            isInvalid={!!errors.receiver_name}
                            {...{ onChange, value }}
                        />
                    )}
                />
                {errors.receiver_name && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <Controller
                    control={control}
                    name="phone"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <InputText
                            label="Telepon"
                            isInvalid={!!errors.phone}
                            {...{ onChange, value }}
                        />
                    )}
                />
                {errors.phone && <ErrorText>Wajib diisi</ErrorText>}
            </div>
            <div>
                <Controller
                    control={control}
                    name="address"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <InputTextArea
                            label="Alamat"
                            isInvalid={!!errors.address}
                            {...{ onChange, value }}
                        />
                    )}
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
                <Controller
                    control={control}
                    name="postal_code"
                    render={({ field: { onChange, value } }) => (
                        <InputText
                            label="Kode Pos"
                            {...{ onChange, value }}
                        />
                    )}
                />
            </div>
            <div>
                <StyledButton className="w-full" type="submit" variant="primary">Simpan</StyledButton>
            </div>
        </StyledForm>
    );
}

export default Form;