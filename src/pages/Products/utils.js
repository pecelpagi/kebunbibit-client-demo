import * as apiService from "../../data";

export const SORTING_TYPE = {
    MOST_POPULAR: 1,
    NEWEST: 2,
    HIGHEST_PRICE: 3,
    LOWEST_PRICE: 4,
    ASCENDING: 5,
    DESCENDING: 6,
}

export const handleFetchProducts = async (categoryId, onFinished = null) => {
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
    } catch (e) {
        console.error(e);
    }

    if (onFinished) onFinished({ data, pageCount });

    return { data, pageCount };
}

export const handleFetchCategoryBySlug = async (slug, onFinished = null) => {
    let data = null;

    try {
        const res = await apiService.getCategoryBySlug(slug);
        ({ data } = res);
    } catch (e) {
        console.error(e);
    }

    if (onFinished) onFinished(data);

    return data;
}

export const handleFetchAll = async (slug, onFinished) => {
    let product = null;
    const category = await handleFetchCategoryBySlug(slug);

    if (category) product = await handleFetchProducts(category.id);

    onFinished({ category, product });
}
