$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
})

$(document).ready(function() {
  $('.btn').click(function(){
    $('.slider').toggleClass('show');
  });
});

$(document).ready(function() {
  $('.last').click(function(){
    $('.login').addClass('show');
    $('.signup').addClass('hide');
  });
});

$(document).ready(function() {
  $('.boldd').click(function(){
    $('.login').addClass('hide');
    $('.signup').addClass('show');
  });
});

$(document).ready(function() {
  $('#pass').click(function(){
    $('.login').addClass('hide');
    $('.forgetpass').addClass('show');
  });
});