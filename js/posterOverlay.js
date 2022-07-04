$(document).ready(function () {
    $(".posterOverlay").stop().hide();
    $(".poster").hover(function () {
        $('.posterOverlay').stop().hide();
        $(this).find(".posterOverlay").stop().fadeIn();
    }, function () {
        $(".posterOverlay").stop().hide();
    });
});