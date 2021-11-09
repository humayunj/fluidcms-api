import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const URL = `https://api-fluidcms.herokuapp.com`;
// export const URL = `http://localhost:3001`;

export class APIResponseError extends Error {
  code: number;

  constructor(msg?: string, code?: number) {
    super(msg || "Unknown API response error.");
    this.code = code || 500;
  }
}
interface GenericAPIResponse {
  ok: boolean;
  error?: string;
  data?: any;
}

export const API = {
  get(uri: string, config?: AxiosRequestConfig<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get(URL + uri, config)
        .then((r) => {
          let data = r.data as GenericAPIResponse;
          if (!data.ok || !data.data) {
            reject(
              new APIResponseError(
                data?.error || "Unknwon API response error",
                500
              )
            );
          }
          resolve(data.data);
        })
        .catch((er: AxiosError) => {
          reject(ErrorResponse(er));
        });
    });
  },
  put(uri: string, data?: any, config?: AxiosRequestConfig<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .put(URL + uri, data, config)
        .then((r) => {
          let data = r.data as GenericAPIResponse;
          if (!data.ok || !data.data) {
            reject(
              new APIResponseError(
                data?.error || "Unknwon API response error",
                500
              )
            );
          }
          resolve(data.data);
        })
        .catch((er: AxiosError) => {
          reject(ErrorResponse(er));
        });
    });
  },
  post(
    uri: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .post(URL + uri, data, config)
        .then((r) => {
          let data = r.data as GenericAPIResponse;
          if (!data.ok || !data.data) {
            reject(
              new APIResponseError(
                (data?.error as string) || "Unknwon API response error",
                500
              )
            );
          }
          resolve(data.data);
        })
        .catch((er: AxiosError) => {
          reject(ErrorResponse(er));
        });
    });
  },
  patch(
    uri: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .patch(URL + uri, data, config)
        .then((r) => {
          let data = r.data as GenericAPIResponse;
          if (!data.ok || !data.data) {
            reject(
              new APIResponseError(
                data?.error || "Unknwon API response error",
                500
              )
            );
          }
          resolve(data.data);
        })
        .catch((er: AxiosError) => {
          reject(ErrorResponse(er));
        });
    });
  },
  delete(uri: string, config?: AxiosRequestConfig<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .delete(URL + uri, config)
        .then((r) => {
          let data = r.data as GenericAPIResponse;
          if (!data.ok || !data.data) {
            reject(
              new APIResponseError(
                data?.error || "Unknwon API response error",
                500
              )
            );
          }
          resolve(data.data);
        })
        .catch((er: AxiosError) => {
          reject(ErrorResponse(er));
        });
    });
  },
};

// GENERIC ERROR_RESPONSE HELPER FUNCTION
// TO FOLLOW DRY (don't repeat yourself) RULE.

let ErrorResponse = (er: AxiosError) => {
  return new APIResponseError(
    ((er.response?.data as any)?.error as string) ||
      (er.response?.data as string) ||
      er.message,
    er.response?.status || 500
  );
};
