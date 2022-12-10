$(document).ready(function(){
    
    //Apply Dark theme
       $('body').toggleClass('dark-theme');

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
})