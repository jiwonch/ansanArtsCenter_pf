function commentDelete(ele) {
    var deleteConfirm = confirm("정말로 삭제하시겠습니까?");
    if (deleteConfirm == true) {
        console.log(deleteConfirm);
        // document.getElementsByClassName("commentText")[0].style.display=none;
        var pwd = prompt("비밀번호를 입력하세요.", 12345);

        if (pwd == 12345) {
            // var pd = $(this);
            // pd.parentElement
            $(ele).css("display", "none");
        }
    }

}

function commentDelete1() {
    commentDelete(document.getElementsByClassName("a")[0]);
}

function commentDelete2() {
    commentDelete(document.getElementsByClassName("b")[0]);
}

function commentDelete3() {
    commentDelete(document.getElementsByClassName("c")[0]);
}

function commentDelete4() {
    commentDelete(document.getElementsByClassName("d")[0]);
}

function commentDelete5() {
    commentDelete(document.getElementsByClassName("e")[0]);
}