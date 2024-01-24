import * as apiService from "../../data";
import { catchError } from "../../utils";

export const handleFetchProducts = async ({ toastify, setState }) => {
    try {
        const res = await apiService.getProducts({ limit: 6, page: 1 });
        const products = res.data;

        setState({ products });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}