/* eslint-disable no-throw-literal */
import axios, { AxiosRequestConfig } from 'axios';
import * as apiUrls from './apiUrls';
const RestAxiosService = (
  url: string,
  method: string = 'GET',
  body: any = null,
  headers: any = {},
  config: any = {}
) => {
  const extraConfig = typeof config === 'object' ? config : {};
  const options: AxiosRequestConfig = {
    url,
    method: method,
    data: body,
    headers: headers
  };
  if (method.toLowerCase() === 'get' && options.data && typeof options.data === 'object') {
    options.params = options.data;
    delete options.data;
  }

  return axios({ withCredentials: false, ...options, ...extraConfig })
    .then((res) => {
      return res;
    })
    .catch((e: any) => {
      if (typeof e === 'object' && typeof e.response === 'object' && e.response?.status) {
        throw { status: e.response.status, data: e.response.data };
      } else {
        throw {
          status: 532,
          data: 'Internet connection failure or server is down'
        };
      }
    });
};

function HttpGet(url: any, params: any = null, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, 'GET', params, headers, config);
}

function HttpPost(url: any, body: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, 'POST', body, headers, config);
}

function HttpPut(url: any, body: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, 'PUT', body, headers, config);
}

function HttpPatch(url: any, body: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, 'PATCH', body, headers, config);
}

function HttpDelete(url: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, 'DELETE', null, headers, config);
}

const URLS = {
  api: { ...apiUrls }
};

const axiosApiClient = {
  URLS,
  get: HttpGet,
  post: HttpPost,
  put: HttpPut,
  patch: HttpPatch,
  delete: HttpDelete
};

export default axiosApiClient;
