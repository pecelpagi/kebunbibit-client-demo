import { useEffect, useMemo, useReducer } from "react";
import { checkIsLoggedIn, setupLocalCurrency } from "../utils";
import { ACTION_TYPE } from "./enums";
import * as fetcherUtility from "./fetcher.utils";

const initialState = {
    cartData: [],
    wishlistData: [],
    loggedInProfile: null,
    shippingAddressData: [],
    customerOrdersData: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CART_DATA:
            return { ...state, cartData: action.payload };
        case ACTION_TYPE.SET_WISHLIST_DATA:
            return { ...state, wishlistData: action.payload };
        case ACTION_TYPE.SET_LOGGED_IN_PROFILE:
            return { ...state, loggedInProfile: action.payload };
        case ACTION_TYPE.SET_SHIPPING_ADDRESS_DATA:
            return { ...state, shippingAddressData: action.payload };
        case ACTION_TYPE.SET_CUSTOMER_ORDERS_DATA:
            return { ...state, customerOrdersData: action.payload };
        default:
        // do nothing
    }

    return state;
};

const handleRefetchAll = (dispatch) => {
    fetcherUtility.handleFetchCart(dispatch);
    fetcherUtility.handleFetchWishlist(dispatch);
    fetcherUtility.handleFetchShippingAddresses(dispatch);
    fetcherUtility.handleFetchMyProfile(dispatch);
    fetcherUtility.handleFetchCustomerOrders(dispatch);
}

const createContextDataHandler = (dispatch = () => { }) => ({
    onFetchMyProfile: () => { fetcherUtility.handleFetchMyProfile(dispatch); },
    onFetchShippingAddresses: () => { fetcherUtility.handleFetchShippingAddresses(dispatch); },
    onFetchCart: () => { fetcherUtility.handleFetchCart(dispatch); },
    onFetchWishlist: () => { fetcherUtility.handleFetchWishlist(dispatch); },
    onFetchCustomerOrders: () => { fetcherUtility.handleFetchCustomerOrders(dispatch); },
    onRefetchAll: () => { handleRefetchAll(dispatch) }
});

const handleDidMount = (dispatch) => {
    setupLocalCurrency();

    if (checkIsLoggedIn()) { handleRefetchAll(dispatch); }
}

export const useContextReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextDataHandler = useMemo(() => createContextDataHandler(dispatch), [dispatch]);

    useEffect(() => {
        handleDidMount(dispatch);
    }, []);

    return {
        ...state,
        ...contextDataHandler,
    };
};