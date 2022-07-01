$('.fun-btn').on('click', function (event) {
    $(this).toggleClass('start-fun');
    var $btn = $('.buttonBox');
    $btn.toggleClass('color-bg-start').toggleClass('bg-animate-color');

    $(this).hasClass('start-fun') ?
        $(this).text('subcribe!') :
        $(this).text('subcribe?');
});