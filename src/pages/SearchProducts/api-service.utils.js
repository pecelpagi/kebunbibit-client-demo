import * as apiService from "../../data";
import { catchError } from "../../utils";

export const handleFetchProducts = async ({ toastify, setState, keyword, currentPage, location, history }) => {
    let data = [];
    let pageCount = 0;

    try {
        const payload = {
            limit: 20,
            page: currentPage,
            search: keyword,
        };
        const res = await apiService.getProducts(payload);
        ({ data, meta: { page_count: pageCount } } = res);

        setState({ products: data, productPageCount: pageCount }, () => {
            if (location && history) {
                history.push(`${location.pathname}?page=${currentPage}&q=${keyword}`);
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0;
            }
        });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}

