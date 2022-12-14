$(document).ready(function(){
    
    //Apply Dark theme
       $('body').toggleClass('dark-theme');

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
})
$(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

 