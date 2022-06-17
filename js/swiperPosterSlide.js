const swiper1 = new Swiper('.swiper-container',{
    //optional parameters
    direction: 'horizontal',
    slidesPerView: 3.53,
    slidesBetween: 7,
    debugger: true,
    loop: true,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
        // 5500
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});