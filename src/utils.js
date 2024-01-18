import React from "react";
import Cookies from 'js-cookie'
import numeral from "numeral";
import { isEmail } from "validator";

import NoImage from "./images/no_image.jpeg";

const COOKIE_TYPE = {
  IS_LOGGED_IN: 'IS_LOGGED_IN',
};

export const setupLocalCurrency = () => {
  // load a locale
  numeral.register("locale", "id", {
    delimiters: {
      thousands: ".",
      decimal: ",",
    },
    abbreviations: {
      thousand: "k",
      million: "m",
      billion: "b",
      trillion: "t",
    },
    currency: {
      symbol: "Rp ",
    },
  });

  // switch between locales
  numeral.locale("id");
}

export const createFileUrlPreview = img => (!img ? NoImage : `/image-web-service/uploads/${img}`);

export const checkIsLoggedIn = () => Cookies.get(COOKIE_TYPE.IS_LOGGED_IN);

export const getBasePath = () => {
  let currentLink = String(window.location.pathname).substring(1);

  if (currentLink.split("/").length > 0) {
    [currentLink] = currentLink.split("/");
  }

  return currentLink;
};

const getKeyAndValue = (rawValue) => {
  const splits = rawValue.split("=");

  if (splits.length > 0) return { [splits[0]]: String(splits[1]).replaceAll("%20", " ") };

  return {};
};

export const getQueryParams = () => {
  let rawValue = window.location.search;
  rawValue = rawValue.replaceAll("?", "");
  const splits = rawValue.split("&");

  let returnObjects = {};

  splits.forEach((x) => {
    returnObjects = { ...returnObjects, ...getKeyAndValue(x) };
  });

  return returnObjects;
};

export const isHasProperty = (obj, key) => Object.hasOwnProperty.call(obj, key);

export const catchError = (e) => {
  let message = "Unknown error";
  if (typeof e === "string") message = e;
  if (Object.prototype.hasOwnProperty.call(e, "message")) ({ message } = e);
  if (Object.prototype.hasOwnProperty.call(e, "error")) ({ error: message } = e);
  return message;
};

export const validateEmail = (email) => {
  if (isEmail(email)) return true;
  return false;
};

export const isMobile = window.matchMedia("(max-width: 767px)");

export const currency = val => numeral(val).format("$0,0");

export const toTitleCase = str => str.replace(
  /\w\S*/g,
  txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
);

export const MATCH_MEDIA_TYPE = {
  SM: '(min-width: 640px)',
  MD: '(min-width: 768px)',
  LG: '(min-width: 1024px)',
  XL: '(min-width: 1280px)',
};

export const matchMediaChecker = (type) => window.matchMedia(type).matches;

export const replaceAllExceptNumerics = (val) => {
  let newValue = val;

  if (val) newValue = String(newValue).replace(/[^0-9.]+/g, "");

  return newValue;
}