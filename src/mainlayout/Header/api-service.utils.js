import * as apiService from "../../data";
import { catchError } from "../../utils";

export const handleSearchProducts = async ({ keyword, toastify, setState }) => {
    setState({ isSearching: true });

    try {
        const res = await apiService.getProducts({ limit: 10, page: 1, search: keyword });
        const products = res.data;

        setState({ searchResults: products });
    } catch (e) {
        toastify.notifyError(catchError(e));
    } finally {
        setState({ isSearching: false });
    }
}