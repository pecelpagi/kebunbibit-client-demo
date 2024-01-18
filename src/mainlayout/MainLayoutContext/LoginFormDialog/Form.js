import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as GoogleLogo } from "./icon-google.svg";
import InputText from '../../../components/InputText';
import InputPassword from '../../../components/InputPassword';
import StyledButton from '../../../components/StyledButton';
import { isHasProperty } from "../../../utils";
import { styled } from "../../../stitches.config";
import GlobalContext from "../../../provider/GlobalContext";

const createErrorMessage = (data, errorFromAPI = '') => {
    const errors = Object.keys(data);

    if (errorFromAPI) return errorFromAPI;

    if (errors.length === 0) return '';

    if (isHasProperty(data, 'email')) return 'Username masih kosong';
    if (isHasProperty(data, 'passwd')) return 'Password masih kosong';

    return '';
}

const Separator = () => (
    <div className="text-sm">
        <hr style={{
            position: 'relative',
            top: '11px',
        }} />
        <span style={{
            background: '#FFF',
            position: 'relative',
            width: '40px',
            display: 'inline-block',
        }}>atau</span>
    </div>
);

const StyledForm = styled('form', {
    'a': {
        color: '#F04630 !important',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
})

export default ({ onSubmit, errorFromAPI }) => {
    const { onShowDemoOnlyNotification } = useContext(GlobalContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const errMessage = createErrorMessage(errors, errorFromAPI);
    const disabled = !errorFromAPI && String(errMessage).length > 0;
    
    const handleShowDemoOnlyNotification = (e) => {
        if (e) e.preventDefault();

        onShowDemoOnlyNotification();
    }

    return (
        <StyledForm className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText
                    label="Email atau Nomor HP"
                    name="email"
                    required
                    defaultValue="hbolot@getnada.com"
                    {...{ register }}
                />
            </div>
            <div>
                <InputPassword
                    label="Password"
                    name="passwd"
                    required
                    defaultValue="123456"
                    {...{ register }}
                />
            </div>
            {errMessage ? <span className="text-red-600 text-sm block">{errMessage}</span> : null}
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
                <a onClick={handleShowDemoOnlyNotification} href="#" className="text-sm" style={{ marginBottom: '20px' }}>Lupa Password ?</a>
            </div>
            <div className="text-center flex flex-col gap-4">
                <Separator />
                <StyledButton
                    onClick={handleShowDemoOnlyNotification}
                    type="button"
                    css={{ background: '#ea4335', color: '#ffffff' }}
                    className="w-full text-sm disabled:opacity-75 p-0 flex items-center justify-center gap-1">
                    <GoogleLogo width={17} height={17} />Masuk dengan Google
                </StyledButton>
                <span className="text-sm">Belum punya akun ? <a href="#" onClick={handleShowDemoOnlyNotification}>Buat Akun Sekarang</a></span>
            </div>
        </StyledForm>
    )
}