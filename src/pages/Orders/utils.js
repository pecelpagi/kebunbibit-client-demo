import { useRef } from "react";

export const useRefCollections = () => {
    const orderDetailDialog = useRef(null);

    return {
        orderDetailDialog,
    };
};
