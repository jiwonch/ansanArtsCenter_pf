// 햄버거 메뉴 열리고 닫힘

$(document).ready(function () {
    $(".hamberger").click(function () {
        $(".hamberger").toggleClass("active");
        $("#nHide").toggleClass("navHide");
    });

    $(".navHide ul li a").click(function () {
        $(".hamberger").toggleClass("active");
        $("#nHide").toggleClass("navHide");
    });
})