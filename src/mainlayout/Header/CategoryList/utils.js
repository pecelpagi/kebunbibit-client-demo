import * as apiService from "../../../data";

export const handleFetchCategories = async (setState) => {
    try {
        const res = await apiService.getCategories();
        const categories = res.data;

        setState(categories);
    } catch (e) {
        console.error(e);
    }
}