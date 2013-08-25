$(document).ready(function() {

  $('article dl dt').click(function() {
    $(this).next().slideToggle();
  });

});
