import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PageContext from "../PageContext";

export const useBusinessLogic = () => {
    const { addressData, onSaveData, isInMobileView } = useContext(PageContext);
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: addressData,
    });

    const calculateContentHeight = useCallback(() => (window.innerHeight - (isInMobileView ? 65 : 120)), [isInMobileView]);

    const [contentHeight, setContentHeight] = useState(calculateContentHeight);

    useEffect(() => {
        const handler = () => { setContentHeight(calculateContentHeight()); }

        window.addEventListener('resize', handler);

        return () => { window.removeEventListener('resize', handler); };
    }, [calculateContentHeight]);

    return {
        contentHeight,
        errors,
        control,
        onSubmit: (e) => handleSubmit(onSaveData)(e),
    }
}