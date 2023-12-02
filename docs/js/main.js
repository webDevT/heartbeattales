$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
    });
$('.menu-btn').click(function(){
    $('.menu').slideToggle();
})