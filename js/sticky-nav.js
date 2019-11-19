$(document).ready(function() {
    
    $('.sticky-mobile-ctrl').click(function(){
        if( $('.sticky-navigation > .terms-section-link').height() == 0 ){
            $('.sticky-navigation > .terms-section-link').animate({
                "height": "100%",
                "padding": "8px 16px"
            }, 500);
        }
        else{
            $('.sticky-navigation > .terms-section-link').animate({
                "height": "0px",
                "padding": "0px"
            }, 500);
        }
    });
    
    $('.sticky-navigation > .terms-section-link').click(function(){
        if( $(window).width() < 769 ){
            $('.sticky-navigation > .terms-section-link').animate({
                "height": "0px",
                "padding": "0px"
            }, 500);
        }
    });
    
});