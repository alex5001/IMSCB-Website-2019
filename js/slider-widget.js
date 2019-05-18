$(document).ready(function() {
    
    $('.slide-details').hide();
    $('.slide-details:eq(0)').show();
    var k = 0;
    
    $('.slide-list-item').click(function(){
        var i = $('.slide-list-item').index(this);
        
        $('.slide-details').hide();
        $('.slide-details:eq('+ i +')').show();
        k = i;
    });
    
    $('.widget-ctrl-left').click(function(){
        var i = null;
        if ( k >= 1 )
            {
                i = k-1;
            }
        else
            {
                i = $('.slide-details').length - 1;
            }
        
        $('.slide-details').hide();
        $('.slide-details:eq('+ i +')').show();
        k = i;
    });
    
    $('.widget-ctrl-right').click(function(){
        var i = null;
        if ( k < $('.slide-details').length - 1 )
            {
                i = k+1;
            }
        else
            {
                i = 0;
            }
        
        $('.slide-details').hide();
        $('.slide-details:eq('+ i +')').show();
        k = i;
    });
    
});