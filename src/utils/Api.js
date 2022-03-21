class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res.status);
  }
}

export default Api;
