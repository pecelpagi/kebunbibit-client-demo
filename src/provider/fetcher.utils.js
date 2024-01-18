import { ACTION_TYPE } from "./enums";
import * as apiService from "../data";

export const handleFetchCart = async (dispatch) => {
    const res = await apiService.getCart();

    dispatch({ type: ACTION_TYPE.SET_CART_DATA, payload: res.data });
};

export const handleFetchWishlist = async (dispatch) => {
    const res = await apiService.getCustomerWishlists();

    dispatch({ type: ACTION_TYPE.SET_WISHLIST_DATA, payload: res.data });
};

export const handleFetchMyProfile = async (dispatch) => {
    const res = await apiService.getMyProfile();

    dispatch({ type: ACTION_TYPE.SET_LOGGED_IN_PROFILE, payload: res.data });
}

export const handleFetchShippingAddresses = async (dispatch) => {
    const res = await apiService.getShippingAddresses();

    dispatch({ type: ACTION_TYPE.SET_SHIPPING_ADDRESS_DATA, payload: res.data });
}

export const handleFetchCustomerOrders = async (dispatch) => {
    const res = await apiService.getCustomerOrders();

    dispatch({ type: ACTION_TYPE.SET_CUSTOMER_ORDERS_DATA, payload: res.data });
}
