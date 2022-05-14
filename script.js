$(document).ready(function(){

    $('#menu').click(function(){
       $(this).toggleclass('fa-times');
       $('.navbar').toggleclass('nav-toggle');
    });
});