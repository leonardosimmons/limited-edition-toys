import axios, { AxiosResponse } from 'axios';

class HttpController {
  async get<T>(api: string): Promise<T> {
    return await axios
      .get(api)
      .then((res: any) => res.data);
  }

  async post<T, U>(api: string, data: T): Promise<U> {
    return await axios
      .post(api, { data })
      .then((res: AxiosResponse<any>) => res.data);
  }

  async put<T, U>(api: string, data: T): Promise<U> {
    return await axios
      .put(api, { data })
      .then((res: AxiosResponse<any>) => res.data);
  }

  async delete<T, U>(api: string): Promise<U> {
    return await axios
      .delete(api)
      .then((res: AxiosResponse<any>) => res.data);
  }
}

export { HttpController };