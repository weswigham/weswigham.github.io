/* jshint browser: true, jquery: true */
/* global Sideswipe: false */

//http://stackoverflow.com/questions/7690784/how-to-get-absolute-path-from-a-relative-url-with-no-outside-info
function qualifyURL( url ){
  var img = document.createElement('img');
  img.src = url; // set string url
  url = img.src; // get qualified url
  img.src = null; // no server request
  return url;
}

var swipe = null;

function shareify() {
  $('.share-link').each(function(n) {
    var url = qualifyURL($(this).attr('data-link'));
    $(this).share({
      url: url
    });
  });
  
  $(".leftmove").each(function () {
    if (!this.activated) {
      $(this).on('click', function() {
        swipe.right();
      });
      this.activated = true;
    }
  });
  
  $(".rightmove").each(function () {
    if (!this.activated) {
      $(this).on('click', function() {
        swipe.left();
      });
      this.activated = true;
    }
  });
}

$(document).ready(function () {
  'use strict';
  
  swipe = Sideswipe(".content", ["/", "/blog/", "/about/"]);
  swipe.onStartTransition = function(selector, url, direction, duration) {
    $(".sidebar-nav-item").removeClass("active");
    $(".sidebar-nav-item").filter(function() {
      return ($(this).attr("href") === url);
    }).addClass("active");
    
    if (direction==="left" && ($("body").width()>=600)) {
      $("#sidebar-checkbox").prop("checked", "");
    }
  };

  swipe.onEndTransition = function() {
    shareify();
  };
  
  swipe.onLeftBound = function() {
    if ((!$("#sidebar-checkbox").prop("checked")) && ($("body").width()>=600)) { //only expand 'sidebar' on medium/large displays
      $("#sidebar-checkbox").prop("checked", "checked");
    }
  };
  
  
  $("body").append("<div class='leftmove leftarrow pagearrow'></div>");
  $("body").append("<div class='rightmove rightarrow pagearrow'></div>");
  
  shareify();
});

