$(function(){
    $('.mouseOn').hover(function(){
        $(this).parent().find('.top-nav-out').animate({height:'12'},'fast')
    },
    function(){
         $(this).parent().find('.top-nav-out').animate({height:'0'},'fast')
    }
    );
});



















