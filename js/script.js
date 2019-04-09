/* jshint esversion:6 */
$(document).ready(function() {
  $('#projects-trigger').waypoint(function() {
    $('#projects').addClass('animated fadeInRight');
  }, {
    offset: '50%'
  });
  $('#contact-trigger').waypoint(function() {
    $('#contact').addClass('animated fadeInLeft');
  }, {
    offset: '50%'
  });
});