import { METHOD_TYPE } from "./enums";
import fetchApi from "./ApiService";

export const getCategories = async () => {
  const response = await fetchApi("/api/category", {}, METHOD_TYPE.GET);

  return response;
};

export const getProducts = async (payload = {}) => {
  const response = await fetchApi("/api/product", payload, METHOD_TYPE.GET, {
    queryString: payload,
  });

  return response;
};

export const getProduct = async (productId) => {
  const response = await fetchApi(`/api/product/${productId}`, {}, METHOD_TYPE.GET, {});

  return response;
};

export const login = async (payload) => {
  const response = await fetchApi("/api/customer-login", payload, METHOD_TYPE.POST);

  return response;
};

export const logout = async () => {
  const response = await fetchApi("/api/customer-logout", {}, METHOD_TYPE.POST);

  return response;
}

export const addToCart = async (productId, qty) => {
  const response = await fetchApi("/api/customer-cart", { product_id: productId, qty }, METHOD_TYPE.POST);

  return response;
};

export const updateCart = async (productId, qty) => {
  const response = await fetchApi("/api/customer-cart", { product_id: productId, qty }, METHOD_TYPE.PUT);

  return response;
};

export const deleteProductInCart = async (productId) => {
  const response = await fetchApi("/api/customer-cart", { product_id: productId }, METHOD_TYPE.DELETE);

  return response;
};

export const getCart = async () => {
  const response = await fetchApi("/api/customer-cart", {}, METHOD_TYPE.GET);

  return response;
};

export const getProvinces = async () => {
  const response = await fetchApi("/api-region/region/provinces", {}, METHOD_TYPE.GET);

  return response;
};

export const getCities = async (provinceId) => {
  const response = await fetchApi("/api-region/region/regencies", {}, METHOD_TYPE.GET, { queryString: { province_id: provinceId } });

  return response;
};

export const getSubdistricts = async (cityId) => {
  const response = await fetchApi("/api-region/region/districts", {}, METHOD_TYPE.GET, { queryString: { regency_id: cityId } });

  return response;
};

export const getVillages = async (subdistrictId) => {
  const response = await fetchApi("/api-region/region/villages", {}, METHOD_TYPE.GET, { queryString: { district_id: subdistrictId } });

  return response;
};

export const getPostalCode = async (payload) => {
  const response = await fetchApi("/api/region/postal-code", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
};

export const getShippingAddresses = async (search = "") => {
  const response = await fetchApi("/api/customer-shipping-address", {}, METHOD_TYPE.GET, { queryString: { search } });

  return response;
};

export const createShippingAddress = async (payload) => {
  const response = await fetchApi("/api/shipping-address", payload, METHOD_TYPE.POST);

  return response;
};

export const updateShippingAddress = async (payload) => {
  const response = await fetchApi("/api/shipping-address", payload, METHOD_TYPE.PUT);

  return response;
};

export const createOrder = async (payload) => {
  const response = await fetchApi("/api/create-order", payload, METHOD_TYPE.POST);

  return response;
};

export const getCustomerOrders = async () => {
  const response = await fetchApi("/api/customer-orders", {}, METHOD_TYPE.GET);

  return response;
};

export const saveWishlist = async (productId) => {
  const response = await fetchApi("/api/toggle-wishlist", { product_id: productId }, METHOD_TYPE.POST);

  return response;
};

export const getCustomerWishlists = async () => {
  const response = await fetchApi("/api/customer-wishlists", {}, METHOD_TYPE.GET, {});

  return response;
};

export const getMyProfile = async () => {
  const response = await fetchApi("/api/customer-profile", {}, METHOD_TYPE.GET, {});

  return response;
};

export const getCategoryBySlug = async (slug) => {
  const response = await fetchApi(`/api/category-by-slug/${slug}`, {}, METHOD_TYPE.GET, {});

  return response;
};
