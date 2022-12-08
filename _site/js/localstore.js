//set the search input from user into sessionStorage
$('.hero-search').on('submit', function (event) {
    event.preventDefault();
    var searchInput = $('.search-input').val();
    sessionStorage.setItem('search', JSON.stringify(searchInput));
    var searchInput = null;
    window.location.replace("/search-results/");
  });

$('#search-box').on('submit', function (event) {
    event.preventDefault();
    var searchInput = $('#search-box-input').val();
    sessionStorage.setItem('search', JSON.stringify(searchInput));
    var searchInput = null;
    window.location.replace("/search-results/");
  });

$('#header-search-button').click( function (event) {
    event.preventDefault();
    var searchInput = $('#search-box-input').val();
    sessionStorage.setItem('search', JSON.stringify(searchInput));
    var searchInput = null;
    window.location.replace("/search-results/");
  });

$('.cross-theme-nav').click( function (event) {
    event.preventDefault();
    var searchInput = $(this).attr("value");
    console.log(searchInput);
    sessionStorage.setItem('search', JSON.stringify(searchInput));
    var searchInput = null;
    window.location.replace("/search-results/");
  });

//retrieve the stored search input to be passed to gcse
function addSearch (){
      var searchOutput = sessionStorage.getItem('search');
      var searchParsed = $.parseJSON(searchOutput);
  };

$('.search-input').click(function(e){
  e.preventDefault;
  $(".search-input").attr('placeholder', "").css('textTransform', 'capitalize');
})
