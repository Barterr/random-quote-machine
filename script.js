var newQuote = function() {
  $.ajax({
    url: '//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      var content = post.content.replace('<p>','').replace('</p>','');
      console.log(content);
      $('#quote').html(content);
      $('#author').html("- "+post.title);
      $('#tweet-quote').attr("href", 'https://twitter.com/intent/tweet?text=' + $('#quote').html() +"-"+post.title);

      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      $("html body").animate({
        backgroundColor: 'rgb('+red+','+green+','+blue+')',
      }, 1000);
      $("#get-quote").animate({
        color: 'rgb('+red+','+green+','+blue+')',
      }, 1000);
      $("#tweet-quote").animate({
        color: 'rgb('+red+','+green+','+blue+')',
      }, 1000);

    },
    cache: false
  });
};

$(document).ready(function() {
  newQuote();
  $('#get-quote').on('click', newQuote);
});
