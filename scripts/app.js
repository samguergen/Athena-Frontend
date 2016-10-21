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


//displaying more text after read more btn is clicked
  $('#rm-btn1').click(function(event) {
    console.log('inside click 1');
    $('#rm-content1').css({'display': 'inline'});
    $('.btn-area #rl-btn1').css({'display': 'block', 'margin-top':'-20px'});
    $('.btn-area #rm-btn1').css({'display': 'none'});
    $('#qr1').css({'margin-top': '13%', 'margin-bottom': '-10px'});
  });

//displaying less text after read less btn is clicked
  $('#rl-btn1').click(function() {
    console.log('inside unclick func');
    $('#rm-content1').css({'display': 'none'});
    $('.btn-area #rl-btn1').css({'display': 'none'});
    $('.btn-area #rm-btn1').css({'display': 'block'});
  });



  //displaying more text after read more btn is clicked
  $('#rm-btn2').click(function(event) {
    console.log('inside click 1');
    $('#rm-content2').css({'display': 'inline'});
    $('.btn-area #rl-btn2').css({'display': 'block', 'margin-top': '-5%'});
    $('.btn-area #rm-btn2').css({'display': 'none'});
    $('#qr2').css({'margin-top': '13%', 'margin-bottom': '-10px'});
  });

//displaying less text after read less btn is clicked
  $('#rl-btn2').click(function() {
    console.log('inside unclick func');
    $('#rm-content2').css({'display': 'none'});
    $('.btn-area #rl-btn2').css({'display': 'none'});
    $('.btn-area #rm-btn2').css({'display': 'block'});
  });


//displaying more text after read more btn is clicked
  $('#rm-btn3').click(function(event) {
    console.log('inside click 1');
    $('#rm-content3').css({'display': 'inline'});
    $('.btn-area #rl-btn3').css({'display': 'block', 'margin-top': '-5%'});
    $('.btn-area #rm-btn3').css({'display': 'none'});
    $('#qr3').css({'margin-top': '13%', 'margin-bottom': '-10px'});
  });

//displaying less text after read less btn is clicked
  $('#rl-btn3').click(function() {
    console.log('inside unclick func');
    $('#rm-content3').css({'display': 'none'});
    $('.btn-area #rl-btn3').css({'display': 'none'});
    $('.btn-area #rm-btn3').css({'display': 'block'});
  });



//displaying more text after read more btn is clicked
  $('#rm-btn4').click(function(event) {
    console.log('inside click 1');
    $('#rm-content4').css({'display': 'inline'});
    $('.btn-area #rl-btn4').css({'display': 'block', 'margin-top': '-5%'});
    $('.btn-area #rm-btn4').css({'display': 'none'});
    $('#qr4').css({'margin-top': '13%', 'margin-bottom': '-10px'});
  });

//displaying less text after read less btn is clicked
  $('#rl-btn4').click(function() {
    console.log('inside unclick func');
    $('#rm-content4').css({'display': 'none'});
    $('.btn-area #rl-btn4').css({'display': 'none'});
    $('.btn-area #rm-btn4').css({'display': 'block'});
  });



//displaying more text after read more btn is clicked
  $('#rm-btn5').click(function(event) {
    console.log('inside click 1');
    $('#rm-content5').css({'display': 'inline'});
    $('.btn-area #rl-btn5').css({'display': 'block', 'margin-top': '-5%'});
    $('.btn-area #rm-btn5').css({'display': 'none'});
    $('#qr5').css({'margin-top': '13%', 'margin-bottom': '-10px'});
  });

//displaying less text after read less btn is clicked
  $('#rl-btn5').click(function() {
    console.log('inside unclick func');
    $('#rm-content5').css({'display': 'none'});
    $('.btn-area #rl-btn5').css({'display': 'none'});
    $('.btn-area #rm-btn5').css({'display': 'block'});
  });


});


//metric to track user clicking WSJCS nav logo
function handleOutboundLinkClicks(event) {
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href
  });

  function countLinkClicks(){
    var metricValue = '+1';
    ga('set', 'metric1', metricValue);
  }
}

