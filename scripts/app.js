$(document).ready(function() {
  console.log('jquery loading');

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
    if( $('#main-share').css('opacity') == '0') {
      $('#main-share').css({'opacity':'1'});
    }
    else if( $('#main-share').css('opacity') == '1') {
      $('#main-share').css({'opacity':'0'});
    }
  });

//toggle read more/read less content
function initToggle(){
  $.each(new Array(5), function(i){

    $('#rm-btn'+(i+1)).click(function() {
      $('#rm-content'+(i+1)).css({'opacity': '1', 'transition': '0.4s'});
      $('#rl-btn'+(i+1)).css({'opacity': '1', 'margin-top': '-5%', 'height': '5%'});
      $('#rm-btn'+(i+1)).css({'opacity': '0'});
      $('#qr'+(i+1)).css({'margin-top': '13%', 'margin-bottom': '-10px'});
    });

    $('#rl-btn'+(i+1)).click(function() {
      $('#rm-content'+(i+1)).css({'opacity': '0', 'transition': '0.4s'});
      $('#rl-btn'+(i+1)).css({'opacity': '0'});
      $('#rm-btn'+(i+1)).css({'opacity': '1'});
    });
  })
}

initToggle();

});

