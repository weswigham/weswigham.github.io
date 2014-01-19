$(document).ready(function() {
  var Swipe = sideswipe(".content", ["/", "/about/"]);
  Swipe.onstarttransition = function(selector, url, direction, duration) {
    $(".sidebar-nav-item").removeClass("active");
    $(".sidebar-nav-item").filter(function() {
      return ($(this).attr("href") === url);
    }).addClass("active");
    
    if (direction==="left" && ($("body").width()>=600)) {
      $("#sidebar-checkbox").prop("checked", "");
    }
  }
  
  Swipe.onleftbound = function() {
    if ((!$("#sidebar-checkbox").prop("checked")) && ($("body").width()>=600)) { //only expand 'sidebar' on medium/large displays
      $("#sidebar-checkbox").prop("checked", "checked");
    }
  }
  
});