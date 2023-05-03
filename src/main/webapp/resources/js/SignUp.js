const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", function() {
  if (!passwordInput.checkValidity()) {
    passwordInput.setCustomValidity("영문자, 숫자, 특수기호 조합으로 8자 이상으로 입력하세요.");
    passwordInput.reportValidity();
  } else {
    passwordInput.setCustomValidity("");
  }
});

const nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
  if (!nameInput.checkValidity()) {
   nameInput.reportValidity();
   nameInput.setCustomValidity("한글로 시작하는 2~5자 이내로 입력하세요.");
  } else {
   nameInput.setCustomValidity("");
  }
});

const residentidInput = document.getElementById("residentid");
residentidInput.addEventListener("input", function() {
  if (!residentidInput.checkValidity()) {
   residentidInput.reportValidity();
   residentidInput.setCustomValidity("특수문자 제외 숫자로만 입력해 주세요.");
  } else {
   residentidInput.setCustomValidity("");
  }
});

const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function() {
  if (!phoneInput.checkValidity()) {
   phoneInput.reportValidity();
   phoneInput.setCustomValidity("특수문자 제외 숫자로만 입력해 주세요.");
  } else {
   phoneInput.setCustomValidity("");
  }
});

/*//1. 이메일 체크
console.log("emailCheck validation connect");
function emailCheck() {
	var status = document.getElementById('msgEmail');
	var email = document.getElementById('email');
	var emailCheck = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
	if (email.value.match(emailCheck)) {
		status.innerHTML = "올바른 이메일 양식입니다.";
	} else {
		status.innerHTML = "@를 포함한 이메일 양식으로 적어주세요.";
	}
}

//2. 비밀번호 체크: 비밀번호 입력 시 영문자, 숫자, 특수기호 조합(8~25자리 입력)
function passwordCheck() {
	var status = document.getElementById('msgPassword');
	var password = document.getElementById('password');
	var passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/; //특수문자 포함o
	if (password.value.match(passwordCheck)) {
		status.innerHTML = "";
	} else {
		status.innerHTML = "올바른 비밀번호를 입력하세요.";
	}
}

//3. 비밀번호 확인 체크: 비밀번호 재확인 입력 시 일치할 것
function pwVerifiedCheck() {
	var status = document.getElementById('msgpwVerified');
	var password = document.getElementById('password');
	var pwVerified = document.getElementById('pwVerified');
	if (password.value == pwVerified.value) {
		status.innerHTML = "";
	} else {
		status.innerHTML = "비밀번호가 맞지 않습니다.";
	}
}

//4. 이메일 체크
function idCheck() {
	var status = document.getElementById('msgId');
	var id = document.getElementById('id');
	var idCheck = /^[A-Za-z0-9]{5,20}$/;
	if (id.value.match(idCheck)) {
		status.innerHTML = "";
	} else {
		status.innerHTML = "올바른 아이디를 입력하세요.";
	}
}

//5. 주민등록번호 체크
function idCheck() {
	var status = document.getElementById('msgId');
	var id = document.getElementById('id');
	var idCheck = /^[A-Za-z0-9]{5,20}$/;
	if (id.value.match(idCheck)) {
		status.innerHTML = "";
	} else {
		status.innerHTML = "올바른 아이디를 입력하세요.";
	}
}

//7. 휴대폰 체크: 전화번호 입력시 숫자만 입력
function phoneCheck() {
	var status = document.getElementById('msgPhone');
	var phone = document.getElementById('phone');
	var phoneCheck = /^[0-9]+$/;
	///^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/;
	//var exp = /^[0-9]+$/;

	if (phone.value.match(phoneCheck)) {
		status.innerHTML = "";
	} else {
		status.innerHTML = "올바른 전화번호를 입력하세요.";
	}
}
*/
// Example starter JavaScript for disabling form submissions 
// if there are invalid fields
// submit 버튼을 누르면 만일 에러일 경우는 form에 was-validated 클래스를 삽입한다.
(function() {
  "use strict";
  window.addEventListener("load", function() { //attaches an event handler to an element.
	    var form = document.getElementById("needs-validation");
	    form.addEventListener("submit", function(event) {
	      if (form.checkValidity() == false) {
	        event.preventDefault(); //a 태그나 submit 태그 고유의 동작을 중단
	        event.stopPropagation(); //이벤트가 상위 엘리먼트에 전달되지 않게 막아 준다.
	        form.classList.add("was-validated"); //클래스 하나 추가
	      }
	      
	      // 서버 연동 처리
	    }, false);
  }, false);
}());	