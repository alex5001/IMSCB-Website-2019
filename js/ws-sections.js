$(document).ready(function() {
    
    $('.ws-section').hide();
    $('.ws-section:eq(1)').show();
    
    $('.ws-fundamentals-link').click(function(){
        $('.ws-section').hide();
        $('#fundamentals').show();
    });
    
    $('.ws-medicals-link').click(function(){
        $('.ws-section').hide();
        $('#medicals').show();
    });
    
    $('.ws-surgicals-link').click(function(){
        $('.ws-section').hide();
        $('#surgicals').show();
    });
    
    $('.ws-section-link').click(function(){
        var topOffset = 0.20 * $(window).height(),
            target = $('#ws-content').position().top - topOffset;
        
        $("html, body").animate({
            scrollTop: target
        }, 500);
    });
    
});