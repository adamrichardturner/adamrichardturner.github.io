/* jshint esversion:6 */

let compass = document.getElementById("compass"),
  eye = document.getElementById("eye"),
  edit = document.getElementById("edit"),
  polygon = document.getElementById("polygon"),
  projects = document.getElementById("projects");

let inview = new Waypoint.Inview({
  element: $('#about--icons')[0],
  entered: function(direction) {
    compass.style.transform = "rotate(360deg)";
    eye.style.transform = "rotate(360deg)";
    edit.style.transform = "rotate(360deg)";
    polygon.style.transform = "rotate(360deg)";
    projects.style.transform = "animation-name:moveInLeft";
    projects.style.transform = "animation-duration:1s";
    projects.style.transform = "animation-timing-function:ease-out";
    projects.style.transform = "animation-delay:2s";
  }
});

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
  $('#contact').waypoint(function() {
    $('#contact').addClass('animated fadeInLeft');
  }, {
    offset: '50%'
  });
});