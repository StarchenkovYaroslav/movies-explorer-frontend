class Api {
  constructor(apiSettings, defaultErrorMessage) {
    this._baseUrl = apiSettings.baseUrl;
    this._defaultErrorMessage = defaultErrorMessage;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return response.json()
      .then(data => {
        const message = data.message || this._defaultErrorMessage;

        return Promise.reject(new Error(message));
      });
  }
}

export default Api;
