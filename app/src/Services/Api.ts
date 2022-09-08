import * as axios from "axios";

const apiURL = "http://localhost:5000/api";

interface ResponseData {
  data: any;
  status: any;
}

function normalizeServerResponse(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.data,
    status: serverResponse.status,
  };

  return response;
}

function normalizeServerError(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.message,
    status: serverResponse.status,
  };

  return response;
}

//Get all products
export async function getproducts() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/product`,
    };

    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
