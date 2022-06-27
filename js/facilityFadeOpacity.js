$(document).ready(function () {
    $('.fade1, .fade2, .fade3, .fade4, .fade5, .fade6').css({ opacity: 0 });
    $(window).scroll(function () {
        var ws = $(this).scrollTop();

        function detechMediaSize() {
            if (window.matchMedia('(max-width:991px)').matches) {
                if (ws >= 3241) {
                    $('.fade1').animate({ opacity: 1 }, 100);
                    $('.fade2').animate({ opacity: 1 }, 500);
                    $('.fade3').animate({ opacity: 1 }, 1500);
                    $('.fade4').animate({ opacity: 1 }, 800);
                    $('.fade5').animate({ opacity: 1 }, 1300);
                    $('.fade6').animate({ opacity: 1 }, 1100);
                }
            } else if (window.matchMedia('(max-width:1249px)').matches) {
                if (ws >= 2497) {
                    $('.fade1').animate({ opacity: 1 }, 100);
                    $('.fade2').animate({ opacity: 1 }, 500);
                    $('.fade3').animate({ opacity: 1 }, 1500);
                    $('.fade4').animate({ opacity: 1 }, 800);
                    $('.fade5').animate({ opacity: 1 }, 1300);
                    $('.fade6').animate({ opacity: 1 }, 1100);
                }
            } if (window.matchMedia("(min-width:1250px").matches) {
                if (ws >= 3006) {
                    $('.fade1').animate({ opacity: 1 }, 100);
                    $('.fade2').animate({ opacity: 1 }, 500);
                    $('.fade3').animate({ opacity: 1 }, 1500);
                    $('.fade4').animate({ opacity: 1 }, 800);
                    $('.fade5').animate({ opacity: 1 }, 1300);
                    $('.fade6').animate({ opacity: 1 }, 1100);
                }
            }
        };


        window.addEventListener('resize', detechMediaSize, false);

        detechMediaSize();

    });
});