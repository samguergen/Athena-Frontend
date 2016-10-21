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

  // function toggleRead(rm-btn, rl-btn, rm-content, qr){
  //   $(rm-btn).click(function() {
  //     console.log('inside click blueprint');
  //     $(rm-content).css({'display': 'inline'});
  //     $(rl-btn).css({'display': 'block', 'margin-top':'-20px'});
  //     $(rm-btn).css({'display': 'none'});
  //     $(qr).css({'margin-top': '13%', 'margin-bottom': '-10px'});
  //   });
  // }


//   function openContent(rm-btn, rl-btn, rm-content, qr){
//       console.log('inside openContent');
//       $(rm-content).css({'display': 'inline'});
//       $(rl-btn).css({'display': 'block', 'margin-top':'-20px'});
//       $(rm-btn).css({'display': 'none'});
//       $(qr).css({'margin-top': '13%', 'margin-bottom': '-10px'});
//   }

//   function closedContent(rm-btn, rl-btn, rm-content, qr){
//       console.log('inside closedContent');
//       $(rm-content).css({'display': 'none'});
//       $(rl-btn).css({'display': 'none', 'margin-top':'-20px'});
//       $(rm-btn).css({'display': 'block'});
//   }


// //displaying more text after read more btn is clicked
// //5 params: rm-btn1, rm-content1, #rm-btn1, #qr1
//   $('#rm-btn1').click(function(event) {
//     console.log('inside click 1');
//     $('#rm-content1').css({'display': 'inline'});
//     $('.btn-area #rl-btn1').css({'display': 'block', 'margin-top':'-20px'});
//     $('.btn-area #rm-btn1').css({'display': 'none'});
//     $('#qr1').css({'margin-top': '13%', 'margin-bottom': '-10px'});
//   });

// //displaying less text after read less btn is clicked
//   $('#rl-btn1').click(function() {
//     console.log('inside unclick func');
//     $('#rm-content1').css({'display': 'none'});
//     $('.btn-area #rl-btn1').css({'display': 'none'});
//     $('.btn-area #rm-btn1').css({'display': 'block'});
//   });



//   //displaying more text after read more btn is clicked
//   $('#rm-btn2').click(function(event) {
//     console.log('inside click 1');
//     $('#rm-content2').css({'display': 'inline'});
//     $('.btn-area #rl-btn2').css({'display': 'block', 'margin-top': '-5%'});
//     $('.btn-area #rm-btn2').css({'display': 'none'});
//     $('#qr2').css({'margin-top': '13%', 'margin-bottom': '-10px'});
//   });

// //displaying less text after read less btn is clicked
//   $('#rl-btn2').click(function() {
//     console.log('inside unclick func');
//     $('#rm-content2').css({'display': 'none'});
//     $('.btn-area #rl-btn2').css({'display': 'none'});
//     $('.btn-area #rm-btn2').css({'display': 'block'});
//   });


// //displaying more text after read more btn is clicked
//   $('#rm-btn3').click(function(event) {
//     console.log('inside click 1');
//     $('#rm-content3').css({'display': 'inline'});
//     $('.btn-area #rl-btn3').css({'display': 'block', 'margin-top': '-5%'});
//     $('.btn-area #rm-btn3').css({'display': 'none'});
//     $('#qr3').css({'margin-top': '13%', 'margin-bottom': '-10px'});
//   });

// //displaying less text after read less btn is clicked
//   $('#rl-btn3').click(function() {
//     console.log('inside unclick func');
//     $('#rm-content3').css({'display': 'none'});
//     $('.btn-area #rl-btn3').css({'display': 'none'});
//     $('.btn-area #rm-btn3').css({'display': 'block'});
//   });



// //displaying more text after read more btn is clicked
//   $('#rm-btn4').click(function(event) {
//     console.log('inside click 1');
//     $('#rm-content4').css({'display': 'inline'});
//     $('.btn-area #rl-btn4').css({'display': 'block', 'margin-top': '-5%'});
//     $('.btn-area #rm-btn4').css({'display': 'none'});
//     $('#qr4').css({'margin-top': '13%', 'margin-bottom': '-10px'});
//   });

// //displaying less text after read less btn is clicked
//   $('#rl-btn4').click(function() {
//     console.log('inside unclick func');
//     $('#rm-content4').css({'display': 'none'});
//     $('.btn-area #rl-btn4').css({'display': 'none'});
//     $('.btn-area #rm-btn4').css({'display': 'block'});
//   });



// //displaying more text after read more btn is clicked
//   $('#rm-btn5').click(function(event) {
//     console.log('inside click 1');
//     $('#rm-content5').css({'display': 'inline'});
//     $('.btn-area #rl-btn5').css({'display': 'block', 'margin-top': '-5%'});
//     $('.btn-area #rm-btn5').css({'display': 'none'});
//     $('#qr5').css({'margin-top': '13%', 'margin-bottom': '-10px'});
//   });

// //displaying less text after read less btn is clicked
//   $('#rl-btn5').click(function() {
//     console.log('inside unclick func');
//     $('#rm-content5').css({'display': 'none'});
//     $('.btn-area #rl-btn5').css({'display': 'none'});
//     $('.btn-area #rm-btn5').css({'display': 'block'});
//   });



//way 2

// var rmBtnArr = ['#rm-btn1', '#rm-btn2', '#rm-btn3', '#rm-btn4','#rm-btn5'];
// var rlBtnArr = ['#rl-btn1', '#rl-btn2', '#rl-btn3', '#rl-btn4','#rl-btn5'];
// var rmContentArr = ['#rm-content1', '#rm-content2', '#rm-content3', '#rm-content4', '#rm-content5'];

var contentArr = [
                    ['#rm-btn1', '#rl-btn1', '#rm-content1', '#qr1'],
                    ['#rm-btn2', '#rl-btn2', '#rm-content2', '#qr2'],
                    ['#rm-btn3', '#rl-btn3', '#rm-content3', '#qr3'],
                    ['#rm-btn4', '#rl-btn4', '#rm-content4', '#qr4'],
                    ['#rm-btn5', '#rl-btn5', '#rm-content5', '#qr5']
                  ];

// function initToggle(){
  $.each( contentArr, function( i, content ) {
    console.log('contentArr i is ', contentArr[i], content);

    $(contentArr[i][0]).click(function(event) {
      console.log('inside initToggle, contentArr i is ', contentArr[i]);
      $(contentArr[i][2]).css({'display': 'inline'});
      $(contentArr[i][1]).css({'display': 'block', 'margin-top': '-5%'});
      $(contentArr[i][0]).css({'display': 'none'});
      $(contentArr[i][3]).css({'margin-top': '13%', 'margin-bottom': '-10px'});
    });

    $(contentArr[i][1]).click(function(event) {
      console.log('inside initToggle2');
      $(contentArr[i][2]).css({'display': 'none'});
      $(contentArr[i][1]).css({'display': 'none'});
      $(contentArr[i][0]).css({'display': 'block'});
    });
  }

  )
// }

// initToggle();

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

