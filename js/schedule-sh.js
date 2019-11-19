$(document).ready(function() {
    
    $('.event-details').hide();
    
    $('.event-header').click(function(){
        var i = $('.event-header').index(this);
        if( $('.event-details:eq('+i+')').css("display") === "none"){
            $('.event-details:eq('+i+')').show(500);
        } else{
            $('.event-details:eq('+i+')').hide(500);
        }
    });
    
});