const slideSettings = {
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
            slidesToShow: 3,
          }
      }, 
      {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
          }
      }
  ]
}

//HERO SLIDER
$(".hero-slide").slick({
    slidesToShow: 1, 
    autoplay: true,
    autoplayspeed: 2000,
    infinite: true,
    dots: true,
    arrows: false,
    cssEase: 'linear'       
})


//PARTNER SLIDER 
$(".partner-slider").slick(slideSettings);

//CUSTOMER SLIDER
$(".slick-container").slick(slideSettings);