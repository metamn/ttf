$(document).ready(function() {

  // Variants, variants slide
  $('section article aside dl dt').click(function() {
    $(this).nextUntil('dt').slideToggle();
  });

  // Variant, first slide
  $('section:nth-child(1) article aside h2').click(function() {
    scrollTo($('section:nth-child(2)'));
    
    var index = $(this).index() + 2;
    $('section:nth-child(2) article aside dl dt:nth-child(' + index + ')').next().show();
  });

  // Team, frontpage
  $('section:nth-child(1) article header h2 span').click(function() {
    scrollTo($('section:nth-child(4)'));
  });
  
  
  // Footer
  $('#footer nav ul li').click(function() {
    var index = $(this).index() + 2;
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
  });
  
  
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: div.offset().top }, "slow");
  }

});
