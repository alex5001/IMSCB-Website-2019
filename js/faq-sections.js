$(document).ready(function() {
    
    $('.faq-section').hide();
    $('.faq-section:eq(0)').show();
    
    $('.faq-link').click(function(){
        var i = $(this).index(),
            k = $(this).parent().index('.intro-links');
        
        // This shit needs to be independent of the content - 1 and 5 below 
        // do not allow that.
        
        if (k == 1){
            i += 5;
        }
        
        $('.faq-section').hide();
        $('.faq-section:eq('+i+')').show();
        
        $('html, body').animate({
            scrollTop: $('#faq-content').position().top - 0.20 * $(window).height()
        });
    });
    
});