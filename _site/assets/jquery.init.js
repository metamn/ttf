$(document).ready(function() {

  

  // Toggle dl's
  $('section article aside dl dt').click(function() {
    $(this).nextUntil('dt').slideToggle();
  });

  
  // Scroll to variants
  $('section article header ol li').click(function() {
    var index = $(this).index() + 3;
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
  });
  
  $('section:nth-child(2) article aside p ').click(function() {
    var index = $(this).index() + 2;
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
  });
  


  // Scroll to Team, frontpage
  $('section:nth-child(1) article header h2 span').click(function() {
    scrollTo($('section:nth-child(7)'));
  });
  
  
  // Scroll in Footer
  $('#footer nav ul li').click(function() {
    var index = $(this).attr('data-id');
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
  });
  
  
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: div.offset().top }, "slow");
  }

});
