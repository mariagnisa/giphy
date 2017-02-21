'use strict';
import { GIPHY_API_KEY } from '../config';
import queryString from 'query-string';

export default class Giphy {
    /**
      *
      * @param {string} query
      *
      */
  search (searchString) {
      let query = {
        q: searchString,
        limit: 100
      };
      let stringified = queryString.stringify(query);
      const baseurl = '//api.giphy.com/v1/gifs/search';

      return fetch(baseurl + '?' + stringified + '&api_key=' + GIPHY_API_KEY)
      .then(function(response) {
        if (!response.ok) {
          console.log('Something went wrong ' + response.status);
        } else {
           return response.json();
        }
      })
      .catch (function(error) {
        console.log('Something went wrong ' + error);
      })
  }
}
