import * as apiService from "../../data";
import { catchError } from "../../utils";

export const handleFetchProducts = async ({ toastify, categoryId, setState }) => {
    let data = [];
    let pageCount = 0;

    try {
        const payload = {
            limit: 20,
            page: 1,
            category_id: categoryId,
        };
        const res = await apiService.getProducts(payload);
        ({ data, meta: { page_count: pageCount } } = res);

        setState({ products: data, productPageCount: pageCount });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}

export const handleFetchCategoryBySlug = async ({ toastify, slug, setState, onFetchProducts }) => {
    let data = null;

    try {
        const res = await apiService.getCategoryBySlug(slug);
        ({ data } = res);

        setState({ category: data }, () => {
            if (onFetchProducts) onFetchProducts({ toastify, setState, categoryId: data.id });
        });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}
