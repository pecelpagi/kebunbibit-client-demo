import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PageContext from "../PageContext";

export const useBusinessLogic = () => {
    const { addressData, onSaveData, isInMobileView } = useContext(PageContext);
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    console.log('DEBUG-MOBILE-VIEW: ', isInMobileView);
    const calculateContentHeight = useCallback(() => (window.innerHeight - (isInMobileView ? 65 : 120)), [isInMobileView]);

    const [contentHeight, setContentHeight] = useState(calculateContentHeight);

    useEffect(() => {
        const handler = () => { setContentHeight(calculateContentHeight()); }

        window.addEventListener('resize', handler);

        return () => { window.removeEventListener('resize', handler); };
    }, [calculateContentHeight]);

    return {
        addressData,
        contentHeight,
        register,
        errors,
        control,
        onSubmit: (e) => handleSubmit(onSaveData)(e),
    }
}