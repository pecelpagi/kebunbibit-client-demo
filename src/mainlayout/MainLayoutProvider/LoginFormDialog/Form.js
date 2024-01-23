import { Controller } from "react-hook-form"
import { ReactComponent as GoogleLogo } from "./icon-google.svg";
import InputText from '../../../components/InputText';
import InputPassword from '../../../components/InputPassword';
import StyledButton from '../../../components/StyledButton';
import { useBusinessLogic } from "./form.hooks";
import { Separator } from "./form.components";
import { StyledForm } from "./form.styled-components";

const Form = ({ onSubmit: onSubmitProp, errorFromAPI }) => {
    const {
        disabled, errorMessage, control,
        onSubmit, onShowDemoOnlyNotification
    } = useBusinessLogic({ onSubmitProp, errorFromAPI });

    return (
        <StyledForm className="flex flex-col gap-4 mt-4" {...{ onSubmit }}>
            <div>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <InputText
                            label="Email atau Nomor HP"
                            {...{ onChange, value }}
                        />
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name="passwd"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <InputPassword
                            label="Password"
                            {...{ onChange, value }}
                        />
                    )}
                />
            </div>
            {errorMessage ? <span className="text-red-600 text-sm block">{errorMessage}</span> : null}
            <StyledButton
                className="w-full text-sm disabled:opacity-75 p-0"
                variant="primary"
                type="submit"
                disabled={disabled}
            >
                <span
                    className={`flex items-center 
                        justify-center
                        ${disabled ? 'cursor-not-allowed' : ''}`}
                >
                    Masuk
                </span>
            </StyledButton>
            <div className="text-center">
                <button
                    type="button"
                    onClick={onShowDemoOnlyNotification}
                    className="text-sm"
                    style={{ marginBottom: '20px' }}
                >Lupa Password ?</button>
            </div>
            <div className="text-center flex flex-col gap-4">
                <Separator />
                <StyledButton
                    onClick={onShowDemoOnlyNotification}
                    type="button"
                    css={{ background: '#ea4335', color: '#ffffff' }}
                    className="w-full text-sm disabled:opacity-75 p-0 flex items-center justify-center gap-1"
                >
                    <GoogleLogo width={17} height={17} />Masuk dengan Google
                </StyledButton>
                <span className="text-sm">Belum punya akun ? <button type="button" onClick={onShowDemoOnlyNotification}>Buat Akun Sekarang</button></span>
            </div>
        </StyledForm>
    )
}

export default Form;