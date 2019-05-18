$(document).ready(function() {
    
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass("is-active");
    });
    
    $('#nav-items-wrap').css("width", 0);
    
    $('#menu-ctrl').click(function(){
        if( $('#nav-items-wrap').width() == 0 ){
            $('#nav-items-wrap').animate({
                "width": "100%"
            }, 500);
            if($(window).width() < 769){
                $('#nav').css({
                    "height": "unset"
                });
            }
            $('#nav').css({
                "background-color": "rgba(0, 0, 0, .7)"
            });
        }
        else{
            $('#nav-items-wrap').animate({
                "width": "0px"
            }, 500);
            $('#nav').css({
                "height": "10vh",
                "background-color": "rgba(0, 0, 0, 0)"
            });
        }
    });
    
});