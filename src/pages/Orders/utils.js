import * as apiService from "../../data";

export const ORDER_STATUS_TYPE = {
    NEW: 1,
    PROCESSED: 2,
    SHIPPED: 3,
    RECEIVED: 4,
    CANCELED: 5,
}

export const handleFetchCustomerOrders = async (setState) => {
    let data = [];

    try {
        const res = await apiService.getCustomerOrders();
        ({ data } = res);
    } catch (e) {
        console.error(e);
    }

    setState(data);
}
