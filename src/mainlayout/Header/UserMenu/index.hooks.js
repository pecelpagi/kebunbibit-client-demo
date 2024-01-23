import { useContext, useMemo } from "react";
import GlobalContext from "../../../provider/GlobalContext";
import MainLayoutContext from "../../MainLayoutContext";

const calculateTotalCartQty = (cartData) => cartData.reduce((total, current) => (total + current.qty), 0);

export const useBusinessLogic = () => {
    const { cartData } = useContext(GlobalContext);
    const { onClickCart, onClickAccount } = useContext(MainLayoutContext)

    const totalCartQty = useMemo(() => calculateTotalCartQty(cartData), [cartData]);

    return {
        totalCartQty,
        onClickCart,
        onClickAccount,
    }
}