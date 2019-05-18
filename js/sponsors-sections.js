$(document).ready(function() {
    
    $('.institutions-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#institutions-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.congresses-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#congresses-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.sponsors-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#sponsors-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.media-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#media-section').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
});