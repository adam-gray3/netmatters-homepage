//PARTNER SLIDER 
$(".partner-slider").slick({
        slidesToShow: 2,
        autoplay: true,
        speed: 200, 
        inifnite: true, 
        arrows: false, 
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 741,
                settings: {
                  slidesToShow: 4,
                }
            }, 
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 6,
                }
            }
        ]
})

//HERO SLIDER
$(".hero-slide").slick({
    slidesToShow: 1, 
    // autoplay: true,
    infinite: true,
    dots: true,
    arrows: false,
    cssEase: 'linear'       
})

//CUSTOMER SLIDER
$(".slick-container").slick({
    slidesToShow: 8,
    autoplay: true,
    speed: 200, 
    inifnite: true, 
    arrows: false
})