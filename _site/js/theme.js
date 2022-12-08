$(document).ready(function () {


  
  [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });



$('.formOn').click(function(){
  $('#framework-feedback').removeClass('hidden');
  newLoc = $(this);
  newLocText = newLoc[0].innerText;
  $('#framework-title').text(newLocText);
});
$('.formOff').click(function(){
  $('#framework-feedback').addClass('hidden');
  newLoc = $(this);
  newLocText = newLoc[0].innerText;
  $('#framework-title').text(newLocText);
});
$('.framework-intro-link').click(function(){
  $('.active').removeClass('active');
});

(function(){ //fullscreen modal for portfolio theme
  $(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
})();

(function(){
  function initializeNavigationBar(){
    // Close collapse navbar
    $('.navbar-collapse a').click(function(){
      if($(window).width() < 767)
        $('.navbar-collapse').collapse('hide');
    });
  }

  // $(initializeNavigationBar);
})();


// (function(){
//   function attachSmoothScrollHandlers(){
//     // if (($(window).height() + 100) < $(document).height()) {
//     //   $('#top-link-block').removeClass('hidden')({
//     //     // how far to scroll down before link "slides" into view
//     //     offset: {top:100}
//     //   });
//     // }
//
//     $('a[href*=#]:not([href=#])').click(function() {
//       if($.data(this, '_smoothscroll')){ return; }
//       $.data(this, '_smoothscroll', true);
//
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//           || location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//         if (target.length) {
//           $('html,body').animate({
//             scrollTop: target.offset().top
//           }, 1000);
//           return false;
//         }
//       }
//     });
//   }
//   $(attachSmoothScrollHandlers);

//this one is extra if function goes back in.
// })();
// });


$(document).ready(function() {
  $('.moreBio1').click(function() {
    $('div.area1 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio2').click(function() {
    $('div.area2 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio3').click(function() {
    $('div.area3 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio4').click(function() {
    $('div.area4 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio5').click(function() {
    $('div.area5 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio6').click(function() {
    $('div.area6 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio7').click(function() {
    $('div.area7 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio8').click(function() {
    $('div.area8 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio9').click(function() {
    $('div.area9 p:nth-child(n+2)').slideToggle();
  });
  $('.moreBio10').click(function() {
    $('div.area10 p:nth-child(n+2)').slideToggle();
  });

});


$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 80){
    $('#nav.navbar, #nav.navbarfixed').addClass('reduced_size');
    $('#orderButtons').addClass('reduced_order_button_size');
    $('#orderButtons a').addClass('btn-sm');
  }
  else
  {
    $('#nav.navbar, #nav.navbarfixed').removeClass('reduced_size', 1000);
    $('#orderButtons').removeClass('reduced_order_button_size');
    $('#orderButtons a').removeClass('btn-sm');
  }
});

$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 80){
    $('#top-link-block').removeClass('hidden').addClass('affix');
    $('#back-link-block').removeClass('hidden').addClass('affix');
  }

});

// animate icon/img appearance on scroll
$(window).scroll(function() {
  $('.animateEntry').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).addClass("animated fadeInUp");
    }
  });
  $('.animateEntryLeft').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).removeAttr('style');
      $(this).addClass("animated fadeInLeft");
    }
  });
  $('.animateEntryRight').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).removeAttr('style');
      $(this).addClass("animated fadeInRight");
    }
  });
});

});
