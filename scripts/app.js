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
  $('#read-more').click(function() {
    console.log('inside click func');
    $('#readmore-content').css({'display': 'inline'});
    $('.btn-area #read-more').css({'display': 'none'});
    $('.btn-area #read-less').css({'display': 'block'});
  });

  // $(".predict-jumbo .contact-photos .first-row a[href]").on('click', function(e) {
  //    e.preventDefault();
  //    var hash = this.hash;
  //    $('html, body').animate({
  //        scrollTop: $(hash).offset().top
  //      }, 300, function(){
  //        window.location.hash = hash;
  //      });
  // });

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

