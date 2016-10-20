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
  // $('.read-more').click(function(event) {
  //   console.log('inside click func');
  //   console.log('event is ', event.target);
  //   console.log('event class is ', event.target.class);
  //   $('.readmore-content').css({'display': 'inline'});
  //   $('.btn-area .read-more').css({'display': 'none'});
  //   $('.btn-area .read-less').css({'display': 'block', 'margin-top': '-5%'});
  //   $('.quote-ref').css({'margin-top': '15%'});
  // });

$('.read-more').click(function(event) {
  console.log('event is ', event.target);
  console.log('event id is ', event.target.id);
  console.log('this is ', $(this));
  });

  // $spin = this.$('.readmore-content');


//displaying less text after read less btn is clicked
  $('#read-less').click(function() {
    console.log('inside unclick func');
    $('#readmore-content').css({'display': 'none'});
    $('.btn-area #read-less').css({'display': 'none'});
    $('.btn-area #read-more').css({'display': 'block'});
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

