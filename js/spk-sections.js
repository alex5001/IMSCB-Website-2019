$(document).ready(function() {
    
    $('.spk-keynotes-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#keynotes-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.spk-conferences-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#conferences-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.spk-workshops-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#workshops-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
});