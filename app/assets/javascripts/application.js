// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

  function initMap(){
    var center = {lat: 39.500, lng: -98.350};
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: center});

      function plotPoint(lat, long){
        var city = {lat: lat, lng: long};
        var marker = new google.maps.Marker({position: city, map: map}); 
      }

      Rails.ajax({
        url: "/points.json",
        type: "get",
        success: function(points) { 
            points.forEach(function(point) {                
                plotPoint(point.latitude, point.longitude);
            })
        },
        error: function(data) {}
    });
  }