import { useCallback, useContext } from "react";
import PageContext from "./PageContext";

export const useBusinessLogic = () => {
    const { products, productPageCount, currentPage, onSetCurrentPage } = useContext(PageContext);

    const handleSetCurrentPage = useCallback((val) => {
        onSetCurrentPage(val + 1);
    }, [onSetCurrentPage]);

    return {
        products, productPageCount, currentPage: +currentPage - 1, onSetCurrentPage: handleSetCurrentPage,
    }
}