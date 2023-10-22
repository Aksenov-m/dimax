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

  async ossale(data) {
    const method = "OSSale";
    const apiKey = this._headers.authorization;

    const url = `${this._url}/OSSale`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          ...this._headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ApiKey: apiKey,
          MethodName: method,
          Id: data.ID,
          TableName: data.TABLENAME,
          PrimaryKey: data.PRIMARYKEY,
          Price: data.PRICE, 
          Summa: data.SUMMA,
          ClientName: data.NAME,
          Phone: data.PHONE.trim().replace(/[^\d]/g, '').substring(1),
          Email: data.EMAIL,
          PaymentTypeId: 2,
          UseDelivery: 0,
          DeliveryAddress: "",
          IsGift: 0,
          MsgText: "Спасибо за покупку!",
          PName: "",
          PPhone: "",
        }),
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
