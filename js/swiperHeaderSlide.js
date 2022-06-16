const swiper = new Swiper('.swiper',{
    //optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    slidesBetween: 0,
    debugger: true,
    loop: true,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        // 5500
        delay: 6000,
        disableOnInteraction: false,
    },

    // Pagination
    pagination:{
        el: '.swiper-pagination',
        clickable : true,
    },
});