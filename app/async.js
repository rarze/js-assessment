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
    const sortItems = arr => arr.map(item => item.name).sort();
    const respStatus = (xhr) => {
      if (xhr.status === 200) {
        return xhr.responseJSON.people;
      }
      return xhr.reject();
    };
    const options = {
      url: url,
      dataType: 'json',
      success: (data, text, xhr) => respStatus(xhr),
    };
    return $.get(options)
      .then(data => Promise.resolve(sortItems(data.people)))
      .catch(err => console.log(err))
      .done();
  },
};
