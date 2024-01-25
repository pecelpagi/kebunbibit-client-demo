import * as apiService from '../../data';
import { catchError } from '../../utils';

export const handleFetchProduct = async ({ toastify, setState, productId }) => {
    try {
        const res = await apiService.getProduct(productId);

        setState({ product: res.data });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}