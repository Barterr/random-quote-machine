/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, jQuery */

var newQuote = function () {
  "use strict";
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'POST',
    data: {
      "cat": "famous"
    },
    dataType: 'json',
    success: function(data) {

      var quote = data.quote;
      var author = data.author;

      $('#quote').html(quote);
      $('#author').html("- " + author);
      $('#tweet-quote').attr("href", 'https://twitter.com/intent/tweet?text=' + $('#quote').html() + "-" + author);

      // Randombly change background and button colors
      newColors();
    },
    error: function(err) { 
      alert(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "irRr6HqchNmshEA8zId92Jds9pAup17kfF9jsnHgOLmeGOz2NN");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json");
    }
  });
};

var newColors = function () {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  $("html body").animate({
    backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')'
  }, 1000);
  $("#get-quote").animate({
    color: 'rgb(' + red + ',' + green + ',' + blue + ')'
  }, 1000);
  $("#tweet-quote").animate({
    color: 'rgb(' + red + ',' + green + ',' + blue + ')'
  }, 1000);
}

$(document).ready(function () {
  "use strict";
  newQuote();
  $('#get-quote').on('click', newQuote);
});
