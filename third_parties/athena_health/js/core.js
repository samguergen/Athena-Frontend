$(function () { // wait for document ready
  // What's This tooltip
  $('.whats-this').hover(
    function(){
      if($('.whats-this-tooltip').length == 0)
        $(this).append('<div class="whats-this-tooltip"><div class="whats-this-close">&#x2715;</div>This content was paid for by an advertiser and created by The Wall Street Journal advertising department. The Wall Street Journal news organization was not involved in the creation of this content.</div>');
    },function(){
      $(this).find('.whats-this-tooltip').remove();
    }
  );
  // For mobile
  $('.whats-this').click(function(){
    if($('.whats-this-tooltip').length == 0)
      $(this).append('<div class="whats-this-tooltip"><div class="whats-this-close">&#x2715;</div>This content was paid for by an advertiser and created by The Wall Street Journal advertising department. The Wall Street Journal news organization was not involved in the creation of this content.</div>');
    else
        $(this).find('.whats-this-tooltip').remove();
  });

  $('.hamburger').click(function(){
    if($('.menu-view').length == 0){
      ga('send', 'event', {'eventCategory': "Menu Click", "eventAction": "Menu opened"});
      $('body').addClass('menu-view');
    } else{
      ga('send', 'event', {'eventCategory': "Menu Click", "eventAction": "Menu closed"});
      $('body').removeClass('menu-view'); 
    }
      
  });

  // On menu link click, close menu
  $('#menu a[href^=#]').click(function(e){
    e.preventDefault();
    var id = $(this).attr("href"); // grab the href attribute value
    
    if($(id).length > 0) { 
      var scrollTo = $(id).offset().top;
      ga('send', 'event', {'eventCategory': "Menu Click", "eventAction": "Section link clicked", "eventLabel":"Section: " + id});

      $('html,body').animate({
          'scrollTop': scrollTo - $('#pinned-header').height() - 30
      }, 1500);
    }

    $('.menu-view').removeClass('menu-view');
  });

  $('#sponsor-logo').click(function(){
    ga('send', 'event', {'eventCategory': "Logo click", "eventAction": "Client logo link clicked"});
  });

  $('#social-toggle').click(function(){
    if($('.share-open').length == 0){
      $('#social-toggle').addClass('share-open');
    }
    else {
      $('#social-toggle').removeClass('share-open'); 
    }
  });

});