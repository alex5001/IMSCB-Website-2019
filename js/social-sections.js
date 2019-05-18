$(document).ready(function() {
    
    $('.daytime-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#daytime-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.nightlife-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#nightlife-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.recommendations-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#recommendations-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
});