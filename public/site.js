/* Social popups */
function myPopup(url) {
  window.open( url, "myWindow", "status = 1, height = 400, width = 500, resizable = 0" );
}

/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

/* global $ */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $("a.page-scroll").bind("click", function(event) {
    var $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top
    }, 1500, "easeInOutExpo");
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function() {
  if ($(this).attr("class") != "dropdown-toggle active" && $(this).attr("class") != "dropdown-toggle") {
    $(".navbar-toggle:visible").click();
  }
});

// Lazy loading
$(function() {
  $(".lazy").Lazy({scrollDirection: "vertical",
    effect: "fadeIn",
    effectTime: 1000,
    threshold: 0,
    visibleOnly: true,
    onError: function(element) {
      console.error("error loading " + element.data("src"));
    }});
});



















//
