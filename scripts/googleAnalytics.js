
$(document).ready(function() {

  $('#top-hat').on('click', '#wsjcs-link', function(e){
    // var section = $(e.target).closest('.core-section').attr('id');
    var view = 1;
    ga('send', 'event', 'View: '+ view, 'Outbound Link', 'WSJ');
  });
  $('#top-hat').on('click', '#athena-link', function(e){
    // var section = $(e.target).closest('.core-section').attr('id');
    var view = 1;
    ga('send', 'event', 'View: '+ view, 'Outbound Link', 'WSJ');
  });
  $('#top-hat').on('click', '#wsjcs-link', function(e){
    // var section = $(e.target).closest('.core-section').attr('id');
    var view = 1;
    ga('send', 'event', 'View: '+ view, 'Outbound Link', 'WSJ');
  });


    //Social Share For Header
  $('#main-share').on('click', '.at-icon.at-icon-linkedin', function(e){
    ga('send', 'event', 'Section: Menu', 'Share', 'LinkedIn');
  });
  $('#main-share').on('click', '.at-icon.at-icon-facebook', function(e){
    ga('send', 'event', 'Section: Menu', 'Share', 'Facebook');
  });
  $('#main-share').on('click', '.at-icon.at-icon-twitter', function(e){
    ga('send', 'event', 'Section: Menu', 'Share', 'Twitter');
  });
  $('#main-share').on('click', '.at-icon.at-icon-google_plusone_share', function(e){
    ga('send', 'event', 'Section: Menu', 'Share', 'Google Plus');
  });

});

//metric to track user clicks
function handleOutboundLinkClicks(eCat, eLabel) {
  ga('send', 'event', {
    eventCategory: eCat, //'Frame'
    eventAction: 'Click',
    eventLabel: eLabel,
    transport: 'beacon'
  });

  function countLinkClicks(){
    var metricValue = '+1';
    ga('set', 'metric1', metricValue);
  };




