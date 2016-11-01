$(document).ready(function() {
  console.log('jquery loading');
  // alert('width of screen is ', $(window).width());

  //scroll to top animation
  $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

  var amountScrolled = 300;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  });

  $('a.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
      }, 700);
      return false;
  });

//social share toggle
  $('#social-toggle').click(function() {
    console.log('social toggle clicked');
    if( $('#main-share').css('opacity') == '0') {
      $('#main-share').css({'opacity':'1'});
    }
    else if( $('#main-share').css('opacity') == '1') {
      $('#main-share').css({'opacity':'0'});
    }
  });

  $('.hamburger').click(function() {
    console.log('hamburger clicked');
    if( $('.hamburger-menu').css('opacity') == '0') {
      $('.hamburger-menu').css({'opacity':'1'});
    }
    else if( $('.hamburger-menu').css('opacity') == '1') {
      $('.hamburger-menu').css({'opacity':'0'});
    }
  });

  function initToggle(){
  $.each(new Array(5), function(i){

    $('#rm-btn'+(i+1)).click(function(e) {
      $('#rm-content'+(i+1)).css({'opacity': '1', 'height': '100%'});
      $('#rl-btn'+(i+1)).css({'opacity': '1', 'margin-top': '-5%', 'height': '5%'});
      $('#rm-btn'+(i+1)).css({'opacity': '0'});
      // $('.btn-area').css({'margin-top': '10px'});
      if ($(window).width() < 426) {
        console.log('adding bigger container');
        $(this).closest('.container').addClass("bigger-container");
      }
    });

    $('#rl-btn'+(i+1)).click(function(e) {
      $('#rm-content'+(i+1)).css({'opacity': '0'});
      $('#rl-btn'+(i+1)).css({'opacity': '0'});
      $('#rm-btn'+(i+1)).css({'opacity': '1'});
      if ($(window).width() < 426) {
        console.log('rm bigger container');
        $(this).closest('.container').removeClass("bigger-container");
      }
    });
  })
}

initToggle();

});

