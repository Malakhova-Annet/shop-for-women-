
$(function () {
    $('.slider_tumba').slick(
        {
            arrows: false,
            dots: true
        }
    );

    $('.slider').slick(
        {
            arrows: false,
            dots: true,
            adaptiveHeight: true
        }
    );
    $(".toggleMobMenu").on("click",function(){
        $(".menuCont").stop().slideToggle();
    });

    $(".searchIcon").on("click",function(){
        $(".header_form").stop().slideToggle();
    });
});
