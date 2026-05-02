$(window).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll > 750) {
    $('body').addClass('green');
  } 
  else if (scroll > 60) {
    $('body').addClass('orange')
    $('body').removeClass('green');
  } 
  else {
    $('body').removeClass('orange green');
  }
});