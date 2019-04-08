/* jshint esversion:6 */

$(document).ready(function() {
  $('#header-trigger').waypoint(function() {
    $('#about').addClass('animated fadeInLeft');
  }, {
    offset: '50%'
  });
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