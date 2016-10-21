//GOOGLE ANALYTICS
$(document).ready(function() {

  $('#top-hat').on('click', '#wsjcs-link', function(e){
    // var section = $(e.target).closest('.core-section').attr('id');
    var view = 1;

    ga('send', 'event', 'View: '+ sectionTitles[section], 'Outbound Link', 'WSJ');

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



