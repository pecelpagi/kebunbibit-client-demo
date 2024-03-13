import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../provider/GlobalContext";
import { MATCH_MEDIA_TYPE, matchMediaChecker } from "../../../utils";

const calculateContentHeight = () => (window.innerHeight - (matchMediaChecker(MATCH_MEDIA_TYPE.MD) ? 180 : 130));

export const useBusinessLogic = () => {
    const { cartData, isFetchingCart } = useContext(GlobalContext);
    const [contentHeight, setContentHeight] = useState(calculateContentHeight());

    const cartTotal = cartData.reduce((total, data) => (total + (data.price * data.qty)), 0);
    
    useEffect(() => {
        const handler = () => { setContentHeight(calculateContentHeight()); }

        window.addEventListener('resize', handler);

        return () => { window.removeEventListener('resize', handler); };
    }, []);

    return {
        contentHeight,
        cartData,
        cartTotal,
        isFetchingCart,
    }
}