import { useContext } from "react";
import { useForm } from "react-hook-form";
import GlobalContext from "../../../provider/GlobalContext";
import { isHasProperty } from "../../../utils";

const createErrorMessage = (data, errorFromAPI = '') => {
    const errors = Object.keys(data);

    if (errorFromAPI) return errorFromAPI;

    if (errors.length === 0) return '';

    if (isHasProperty(data, 'email')) return 'Username masih kosong';
    if (isHasProperty(data, 'passwd')) return 'Password masih kosong';

    return '';
}

export const useBusinessLogic = ({ onSubmitProp, errorFromAPI }) => {
    const { onShowDemoOnlyNotification } = useContext(GlobalContext);
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            email: 'hbolot@getnada.com',
            passwd: '123456'
        }
    });

    const errorMessage = createErrorMessage(errors, errorFromAPI);
    const disabled = !errorFromAPI && String(errorMessage).length > 0;

    return {
        errorMessage,
        disabled,
        control,
        onSubmit: (e) => handleSubmit(onSubmitProp)(e),
        onShowDemoOnlyNotification,
    }
}