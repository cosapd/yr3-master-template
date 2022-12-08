$( document ).ready(function() {
  var delay = 15000;
  var fade = 300;
  var threshold = 40;
  var timer = setTimeout(displayIndicator, delay);;
  var distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
  function displayIndicator(){
    $('#scroll-down-indicator-bar').fadeIn(fade);
  }
  function hideIndicator(){
    $('#scroll-down-indicator-bar').fadeOut(fade);
  }
  if(distanceFromBottom > threshold) {
    timer = setTimeout(displayIndicator, delay);
  }
  $(document).on('scroll', function() {
    hideIndicator();
    clearTimeout(timer);
    distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
    if(distanceFromBottom > threshold) {
      timer = setTimeout(displayIndicator, delay);
    }
  });
});
