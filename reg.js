var id;
var pw;
var pw_re;
var name;
var email;
var gender;

var ipId;
var ipPw;
var ipPw_re;
var ipName;
var ipEmail;
var ipGender;


window.onload = function() {
    ipId = document.getElementById("id");
    ipPw = document.getElementById("pw");
    ipPw_re = document.getElementById("pw_re");
    ipName = document.getElementById("user_name");
    ipEmail = document.getElementById("email");
    ipGender = document.getElementsByName("gender");
    
}
function passwordCheck() {
    if(pw == pw_re) {
        console.log("비밀번호 같음");
        return true;
    } else {
        console.log("비밀번호 다름");
        return false;
    }
}
function checkId() {
    if(id.length>=4 && id.length<=12) {
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}
function checkPw() {
    if(pw.length>=4 && pw.length<=12) {
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function checkPw_re() {
    if(pw.length>=4 && pw.length<=12) {
        console.log("ok pw_re");
        return true;
    } else {
        console.log("no pw_re");
        return false;
    }
}
function checkUserName() {
    if(user_name.length>=2 && user_name.length<=6) {
        console.log("ok name");
        return true;
    } else {
        console.log("no name");
        return false;
    }
}
function checkEmail() {
    if(email.length>=4 && email.length<=40) {
        console.log("ok email");
        return true;
    } else {
        console.log("no email");
        return false;
    }
}
function check() {
    id=ipId.value;
    pw=ipPw.value;
    pw_re=ipPw_re.value;
    user_name=ipName.value;
    email=ipEmail.value;

    for(var i=0; i<ipGender.length; i++) {
        if(ipGender[i].checked == true) {
            gender = ipGender[i].value;
        }
    }
  
    if(checkId() && checkPw() && checkPw_re() && checkUserName() && checkEmail() && passwordCheck()) {
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}
