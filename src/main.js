import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ShibeService from './shibe-service.js';

function getElements(response) {
  if (response) { // response.STUFF based on API
    for (let i = 0; i<response.length; i++) {
      $('.showShibe').append(`<img src="${response[i]}">`); 
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#getShibe').click(function(event) {
    $('.showShibe').text('');
    event.stopImmediatePropagation();
    ShibeService.getShibe()
      .then(function(response) {
        getElements(response);
      });
  });

});
