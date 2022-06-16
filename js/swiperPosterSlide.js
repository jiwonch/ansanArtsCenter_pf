const swiper1 = new Swiper('.swiper-container',{
    //optional parameters
    direction: 'horizontal',
    slidesPerView: 4.5,
    slidesBetween: 20,
    debugger: true,
    loop: true,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
        // 5500
        delay: 3000,
        disableOnInteraction: false,
    },
});