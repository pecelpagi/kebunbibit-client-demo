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

export const handleFetchProducts = async ({ toastify, setState }) => {
    try {
        const res = await apiService.getProducts({ limit: 6, page: 1, search: 'te' });
        const products = res.data;

        setState({ otherProducts: products });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}