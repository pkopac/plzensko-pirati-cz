/* global $ */
$(function() {
  $("#clock").countdown("2016/10/07 14:00", function(event) {

    $(this).html(event.strftime("%D dní %H:%M:%S"));
  });
});
