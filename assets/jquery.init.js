$(document).ready(function() {

  // Close timeline
  $('section:nth-child(2) article aside dl dd span').click(function() {
    $(this).parent().hide('slow');
  });

  // Toggle dl's
  $('section article aside dl dt').click(function() {
    $(this).nextUntil('dt').slideToggle();
  });

  // Scroll to Variant, first slide
  $('section:nth-child(1) article aside h2').click(function() {
    scrollTo($('section:nth-child(2)'));
    
    var index = $(this).index() + 2;
    $('section:nth-child(2) article aside dl dt:nth-child(' + index + ')').next().show();
  });


  // Scroll to Team, frontpage
  $('section:nth-child(1) article header h2 span').click(function() {
    scrollTo($('section:nth-child(4)'));
  });
  
  
  // Scroll in Footer
  $('#footer nav ul li').click(function() {
    var index = $(this).index() + 2;
    var slide = $('section:nth-child(' + index + ')');
    scrollTo(slide);
  });
  
  
  function scrollTo(div) {
    $("html, body").animate({ scrollTop: div.offset().top }, "slow");
  }

});
