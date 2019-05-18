$(window).on("load", function() {
    
    var rawHeight = $('.image-gallery').height(),
        imgTotalHeight = 0;
    
    for(var i=0; i < $('.image-gallery > img').length; i++){
        imgTotalHeight += $('.image-gallery > img:eq('+i+')').height() + parseInt($('.image-gallery > img:eq('+i+')').css("padding-top")) + parseInt($('.image-gallery > img:eq('+i+')').css("padding-bottom"));
//        alert(imgTotalHeight);
    }
    
    var colIdealHeight = imgTotalHeight/3,
        colBreakpoint1 = 0,
        colBreakpoint2 = 0,
        colBreakpoint3 = 0,
        k = 0,
        sizeHolder = 0;
    
    while(sizeHolder < colIdealHeight && k < $('.image-gallery > img').length){
//        alert(sizeHolder);
        sizeHolder += $('.image-gallery > img:eq('+k+')').height() + parseInt($('.image-gallery > img:eq('+k+')').css("padding-top")) + parseInt($('.image-gallery > img:eq('+k+')').css("padding-bottom"));
        k++;
    }
    colBreakpoint1 = sizeHolder;
    sizeHolder = 0;
    
    while(sizeHolder < colIdealHeight && k < $('.image-gallery > img').length){
//        alert(sizeHolder);
        sizeHolder += $('.image-gallery > img:eq('+k+')').height() + parseInt($('.image-gallery > img:eq('+k+')').css("padding-top")) + parseInt($('.image-gallery > img:eq('+k+')').css("padding-bottom"));
        k++;
    }
    colBreakpoint2 = sizeHolder;
    sizeHolder = 0;
    
    while(sizeHolder < colIdealHeight && k < $('.image-gallery > img').length){
//        alert(sizeHolder);
        sizeHolder += $('.image-gallery > img:eq('+k+')').height() + parseInt($('.image-gallery > img:eq('+k+')').css("padding-top")) + parseInt($('.image-gallery > img:eq('+k+')').css("padding-bottom"));
        k++;
    }
    colBreakpoint3 = sizeHolder;
    sizeHolder = 0;
    
    var colRealHeight = colBreakpoint1;
    if(colBreakpoint1 < colBreakpoint2){
        colRealHeight = colBreakpoint2;
    } else if(colBreakpoint2 < colBreakpoint3){
        colRealHeight = colBreakpoint3;
    }
    
//    alert(colBreakpoint1);
//    alert(colBreakpoint2);
//    alert(colBreakpoint3);
//    alert(colRealHeight);
//    alert(colIdealHeight);
//    alert(imgTotalHeight);
//    alert(rawHeight);
    
    $('.image-gallery').height(colRealHeight);
//    alert('I did it!');
    
    $('#img-showcase').hide();
    
    // Showcase data loading
    
    $('.image-gallery > img').click(function(){
        
        var imgsrc = $(this).attr("src");
        
        $('#img-showcase > img').attr("src", imgsrc);
        $('#img-showcase > #img-sc-details-wrap > img').attr("src", imgsrc);
        
        $('#img-showcase').show();
    });
    
    // Showcase control

    $('.img-sc-close').click(function(){
        $('#img-showcase').hide();
    });
    
});