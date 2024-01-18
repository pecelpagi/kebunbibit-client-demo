import * as apiService from "../../../data";

export const handleFetchProducts = async (setState) => {
    let products = [];

    try {
        
        const res = await apiService.getProducts({ limit: 6, page: 1 });
        products = res.data;
    } catch (e) {
        console.error(e);
    }

    setState(products);
}
