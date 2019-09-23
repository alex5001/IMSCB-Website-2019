$(document).ready(function() {
    
    $('.s1-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('.hp-story:eq(0)').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.s2-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('.hp-story:eq(1)').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.s3-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('.hp-story:eq(2)').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.s4-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('.hp-story:eq(3)').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.s5-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('.hp-story:eq(4)').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
});