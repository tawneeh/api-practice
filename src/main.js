import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ShibeService from './shibe-service.js';

function getElements(response) {
  if (response) {
    $('.showShibe').html(); // need to change?
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#getShibe').click(function() {
    ShibeService.getShibe()
      .then(function(response) {
        getElements(response);
      });
  });

});
