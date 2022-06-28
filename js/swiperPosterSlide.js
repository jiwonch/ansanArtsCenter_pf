function detechMediaSize() {

    if (window.matchMedia('(max-width:767px').matches){
        const swiper1 = new Swiper('.swiper-container', {
            //optional parameters
            direction: 'horizontal',
            slidesPerView: 1,
            slidesBetween: 0,
            debugger: false,
            loop: true,
            centeredSlides: true,
            resistance: false,
            speed: 1500,
            autoplay: {
                // 5500
                delay: 3000,
                disableOnInteraction: false,
            },
        });
       
    } else if (window.matchMedia('(min-width:768px) and (max-width:991px)').matches) {
        const swiper1 = new Swiper('.swiper-container', {
            //optional parameters
            direction: 'horizontal',
            slidesPerView: 3.5,
            slidesBetween: 3,
            debugger: true,
            loop: true,
            centeredSlides: true,
            speed: 1500,
            autoplay: {
                // 5500
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else if(window.matchMedia('(min-width:992px) and (max-width:1249px)').matches){
        const swiper1 = new Swiper('.swiper-container', {
            //optional parameters
            direction: 'horizontal',
            slidesPerView: 3.4,
            slidesBetween: 6,
            debugger: true,
            loop: true,
            centeredSlides: true,
            speed: 1500,
            autoplay: {
                // 5500
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } if (window.matchMedia('(min-width:1250px').matches) {
        const swiper1 = new Swiper('.swiper-container', {
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
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

window.addEventListener('resize', detechMediaSize, false);

detechMediaSize();
