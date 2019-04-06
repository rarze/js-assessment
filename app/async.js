asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   *
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    const promise = new Promise((resolve, reject) => resolve(value));
    return promise;
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   *
   *
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    const success = (data, xhr) => data.people;
    const respStatus = (data, xhr) => {
      if (xhr.status === 200) {
        return success(data, xhr);
      }
    };
    const options = {
      url: url,
      dataType: 'json',
      success: (data, text, xhr) => {
        return respStatus(data, xhr);
      },
    };
    return Promise.resolve($.ajax(options));
  },
};
