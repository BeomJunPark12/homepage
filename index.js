

var input_id;
var input_pw;
var loginBox;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    loginBox = document.getElementById("login_box");
     
}

function login(){

    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "cat" && local_pw == "123") {
        // alert("로그인 성공");
        loginBox.innerHTML = "<P> 회원님 반갑습니다.</P>";
    } else {
        alert("로그인 실패");
    }

    
}
