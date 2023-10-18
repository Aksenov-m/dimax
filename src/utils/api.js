const onError = (res) => {
  if (res.result === 0) {
    return res.data;
  }
  return Promise.reject(`Ошибка: ${res.resultdescription}`);
};

export class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  async getGoodList() {
    const method = "OSGetGoodList";
    const apiKey = this._headers.authorization;

    const url = `${this._url}/OSGetGoodList?ApiKey=${apiKey}&MethodName=${method}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          ...this._headers,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      return onError(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}


const api = new Api({
  baseUrl: "https://sycret.ru/service/api/api",
  headers: {
    authorization: "011ba11bdcad4fa396660c2ec447ef14",
    "Content-Type": "application/json",
  },
});

export default api;
