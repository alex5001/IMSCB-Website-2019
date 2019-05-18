$(document).ready(function() {
    
    $('.wo-acc-plan').hide();
    $('.switch-btn').click(function(){
//        $('.switch-btn').removeClass('w3-blue');
//        $('.switch-btn').addClass('w3-grey');
//        $(this).addClass('w3-blue');
//        $(this).removeClass('w3-grey');
    });
    
    $('#w-acc-switch').click(function(){
        $('.wo-acc-plan').hide();
        $('.w-acc-plan').show();
    });
    
    $('#wo-acc-switch').click(function(){
        $('.w-acc-plan').hide();
        $('.wo-acc-plan').show();
    });
    
});