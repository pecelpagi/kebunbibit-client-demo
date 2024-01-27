import * as apiService from "../../data";
import { catchError } from "../../utils";

export const handleFetchProducts = async ({ toastify, categoryId, setState, currentPage, location, history }) => {
    let data = [];
    let pageCount = 0;

    try {
        const payload = {
            limit: 20,
            page: currentPage,
            category_id: categoryId,
        };
        const res = await apiService.getProducts(payload);
        ({ data, meta: { page_count: pageCount } } = res);

        setState({ products: data, productPageCount: pageCount }, () => {
            if (location && history) {
                history.push(`${location.pathname}?page=${currentPage}`);
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0;
            }
        });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}

export const handleFetchCategoryBySlug = async ({ toastify, slug, setState, currentPage, onFetchProducts }) => {
    let data = null;

    try {
        const res = await apiService.getCategoryBySlug(slug);
        ({ data } = res);

        setState({ category: data }, () => {
            if (onFetchProducts) onFetchProducts({ toastify, setState, categoryId: data.id, currentPage });
        });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}
