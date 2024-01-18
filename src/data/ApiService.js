import { METHOD_TYPE } from "./enums";

const getQueryString = (params) => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join("&");
};

const fetchApi = async (endPoint, payload = {}, method = METHOD_TYPE.GET, options = {
  queryString: undefined,
  formData: undefined,
}) => {
  let apiUrl = endPoint;

  switch (method) {
    case METHOD_TYPE.GET:
      if (options.queryString) {
        apiUrl = `${endPoint}?${getQueryString(options.queryString)}`;
      }
      break;
    default:
            // do nothing
  }

  let authorization = {};

  if (!options.formData) authorization = { ...authorization, "Content-Type": "application/json" };

  let fetchOptions = {
    method,
    headers: {
      ...authorization,
    },
  };

  if (method !== METHOD_TYPE.GET && !options.formData) fetchOptions = { ...fetchOptions, body: JSON.stringify(payload) };
  if (method !== METHOD_TYPE.GET && options.formData) fetchOptions = { ...fetchOptions, body: options.formData };

  const response = await fetch(apiUrl, fetchOptions);

  const retval = await response.json();

  if (response.ok) return retval;

  throw retval;
};

export default fetchApi;
