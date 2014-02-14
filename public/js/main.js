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


function shareify() {
  $('.share-link').each(function(n) {
    var url = qualifyURL($(this).attr('data-link'));
    $(this).share({
      url: url
    });
  });
}

$(document).ready(function () {
  'use strict';
  
  shareify();
  
  var swipe = Sideswipe(".content", ["/", "/blog/", "/about/"]);
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
  
  /* //Not ready yet!
  $("body").append("<div class='leftarrow pagearrow'>L</div>");
  $("body").append("<div class='rightarrow pagearrow'>R</div>");
  
  $(".leftarrow").on('click', function() {
    swipe.right();
  });
  
  $(".rightarrow").on('click', function() {
    swipe.left();
  });
  */
});

