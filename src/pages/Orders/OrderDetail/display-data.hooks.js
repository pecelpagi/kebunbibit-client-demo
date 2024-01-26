import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { MATCH_MEDIA_TYPE, matchMediaChecker } from "../../../utils";

const calculateProductQtyTotal = (orderDetailData) => orderDetailData.products.reduce((total, product) => (total + product.qty), 0);

const useContentHeight = () => {
    const calculateContentHeight = () => (window.innerHeight - (matchMediaChecker(MATCH_MEDIA_TYPE.MD) ? 120 : 65));

    const [contentHeight, setContentHeight] = useState(calculateContentHeight);

    useEffect(() => {
        const handler = () => { setContentHeight(calculateContentHeight()); }

        window.addEventListener('resize', handler);

        return () => { window.removeEventListener('resize', handler); };
    }, []);

    return contentHeight;
}

export const useBusinessLogic = () => {
    const { orderDetailData } = useContext(PageContext);
    const contentHeight = useContentHeight();

    const productQtyTotal = calculateProductQtyTotal(orderDetailData);

    return {
        orderDetailData,
        contentHeight,
        productQtyTotal,
    }
}