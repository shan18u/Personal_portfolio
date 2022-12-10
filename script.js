$(document).ready(function(){

    //Apply Dark theme
       $('body').toggleClass('dark-theme');

    $('#menu').click(function(){
        $('.navbar').toggleClass('nav-toggle');
    });
})