var currentScrollTop = 0;
$(document).ready(function () {
    scrollController();
    $(window).scroll(function () {
        scrollController();
    });
});

function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > 100) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on")
    }
}