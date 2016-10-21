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


var contentArr = [
                    ['#rm-btn1', '#rl-btn1', '#rm-content1', '#qr1'],
                    ['#rm-btn2', '#rl-btn2', '#rm-content2', '#qr2'],
                    ['#rm-btn3', '#rl-btn3', '#rm-content3', '#qr3'],
                    ['#rm-btn4', '#rl-btn4', '#rm-content4', '#qr4'],
                    ['#rm-btn5', '#rl-btn5', '#rm-content5', '#qr5']
                  ];

function initToggle(){
  $.each( contentArr, function( i, content ) {
    console.log('contentArr i is ', i, contentArr[i], content);
    var test ='#rm-btn'+i;
    console.log('also ', test);

    $(content[0]).click(function(event) {
      console.log('inside initToggle, contentArr i is ', content);
      $(content[2]).css({'display': 'inline'});
      $(content[1]).css({'display': 'block', 'margin-top': '-5%'});
      $(content[0]).css({'display': 'none'});
      $(content[3]).css({'margin-top': '13%', 'margin-bottom': '-10px'});
    });

    $(content[1]).click(function(event) {
      console.log('inside initToggle2');
      $(content[2]).css({'display': 'none'});
      $(content[1]).css({'display': 'none'});
      $(content[0]).css({'display': 'block'});
    });
  })
}

// initToggle();

//v2

function initToggle2(){
  $.each( new Array(5), function(i){
    // console.log('i is ', i);
    // var test ='#rm-btn'+(i+1);
    // console.log('alsoooo ', test, typeof(test));

    $('#rm-btn'+(i+1)).click(function() {
      $('#rm-content'+(i+1)).css({'display': 'inline'});
      $('#rl-btn'+(i+1)).css({'display': 'block', 'margin-top': '-5%'});
      $('#rm-btn'+(i+1)).css({'display': 'none'});
      $('#qr'+(i+1)).css({'margin-top': '13%', 'margin-bottom': '-10px'});
    });

    $('#rl-btn'+(i+1)).click(function() {
      $('#rm-content'+(i+1)).css({'display': 'none'});
      $('#rl-btn'+(i+1)).css({'display': 'none'});
      $('#rm-btn'+(i+1)).css({'display': 'block'});
    });
  })
}

initToggle2();





});




//GOOGLE ANALYTICS

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

