function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(error) {
      console.log(error);
      $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>');
    },
    success     : function(data) {
      console.log(data);
      if (data.result != "success") {
        var message = data.msg.substring(4);
        $('#notification_container').html('<span class="alert">'+message+'</span>');
      }
      else {
        var message = data.msg;
        $('#notification_container').html('<span class="success">'+message+'</span>');
      }
    }
  });
}


$(document).ready(function(){
  var $form = $('#mc-embedded-subscribe-form');
  $('#mc-embedded-subscribe').on('click', function(event) {
    //Whenever the submit button is clicked we prevent the default submission(which would open a JSON results page)
    if(event) event.preventDefault();
    register($form);
  });
});
