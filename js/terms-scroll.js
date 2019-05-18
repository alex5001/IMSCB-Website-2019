$(document).ready(function() {
    
//    alert($('#terms-sections > .terms-section-link').length);
    
//    $('#terms-sections > .terms-section-link').click(function() {
//        alert($(this).index());
//    });
    
    $('.intro-links > .terms-section-link').click(function(){
        
        var i = $(this).index() + 1, // asta n-are 
            topOffset = 0.30 * $(window).height(),
            target = $('h1:eq('+ i +')').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
    $('.sticky-navigation > .terms-section-link').click(function(){
        
        var i = $(this).index(), // asta are sticky-mobile-ctrl
            topOffset = 0.30 * $(window).height(),
            target = $('h1:eq('+ i +')').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
});