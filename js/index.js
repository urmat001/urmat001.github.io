$(document).ready(function () {
    $('.burger__menu').click(function (event) {
        $('.line-1, .line-2, .line-3, .menu').toggleClass('active');
    });

    /* 
        back - slider
    */
    $('.back-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true
    });

})