$(document).ready(function() {
    
//    $('.acc-description-wrap').data("data-simplebar", "init");
    
    if ($(window).width() < 769){
        new SimpleBar($('.intro-wrap')[0]);
        new SimpleBar($('.acc-description-wrap')[0]);
        new SimpleBar($('.acc-description-wrap')[1]);
    }
    
//    $(window).resize(function(){
//        if ($(window).width() < 769){
//            new SimpleBar($('.acc-description-wrap')[0]);
//            new SimpleBar($('.acc-description-wrap')[1]);
//        }
//    });
    
});