$(function(){
// banner slider
$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    fade:true,
    speed:2000,
    autoplaySpeed: 2500,
    prevArrow:'.left',
    nextArrow:'.right',
});
    
// service slider
$('.service-slider-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    speed:2000,
    vertical:true,
    verticalSwiping:true,
    centerMode:true,
    centerPadding:false,
    autoplaySpeed: 2500,
    prevArrow:'.up',
    nextArrow:'.down',
});

// Feedback slider
$('.feed-img-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    speed:1500,
    vertical:true,
    verticalSwiping:true,
    centerMode:true,
    centerPadding:false,
    autoplaySpeed: 2000,
    prevArrow:'.up',
    nextArrow:'.down',
});

// Feedback slider
$('.feed-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    speed:2000,
    fade:true,
    autoplaySpeed: 2500,
});

// Counter Up
$('.counter').counterUp({
    delay: 12,
    time: 2000
});
      

});