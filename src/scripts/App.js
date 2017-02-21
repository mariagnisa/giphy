'use strict';
import Giphy from './utils/Giphy.js';

export default class App {

  constructor () {
    const search = document.forms.search;
    this.submit = search.querySelector('input');
    this.search.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit (event) {
      event.preventDefault();
      this.inputField = document.querySelector('.search__input');
      const giphy = new Giphy();
      let lastQuery = this.inputField.value;
      let gifs = giphy.search(this.inputField.value);
      let gallery = document.querySelector('.gallery');
      //if the gallery have any images, remove them
      while (gallery.hasChildNodes()) {
        gallery.removeChild(gallery.firstChild);
      }
      //handle the json promise data
      gifs.then(function (response) {
        //if the search query doesn´t match anything, output message otherwise show images
        if (response.data.length === 0) {
          let notFound = document.querySelector('.not-found');
          let notFoundQuery = 'We couldn\'t find any GIFs with the search query "' + lastQuery + '".';
          notFound.innerText = notFoundQuery;
          notFound.style.opacity = '1';
        } else {
          response.data.forEach(gif => {
            let image = document.createElement('img');
            image.src = gif.images.fixed_width.url;
            gallery.appendChild(image);
          });
        }

      });
    }
}
