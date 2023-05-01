var alertLink = document.getElementById('alert-link');
alertLink.addEventListener('click', showAlert);

var loginLink = document.getElementById('login-link');
loginLink.addEventListener('click', showLogin);

function showAlert() {
	event.preventDefault(); // Prevent a link from opening the URL 
	alert("내역이 없습니다.");
	/*  Swal.fire(
			 '내역이 없습니다.',
			 '',
			 'warning'
		 ); */
}

function showLogin() {
	event.preventDefault();
	alert("로그인하세요.");
	/*         Swal.fire(
					'로그인하세요.',
					'',
					'info'
				); */
}

var alertLinkSwal = document.getElementById('alert-linkSwal');
alertLinkSwal.addEventListener('click', showAlertSwal);

var loginLinkSwal = document.getElementById('login-linkSwal');
loginLinkSwal.addEventListener('click', showLoginSwal);

function showAlertSwal() {
	Swal.fire(
		'내역이 없습니다.',
		'',
		'warning'
	);
}

function showLoginSwal() {
	Swal.fire(
		'로그인하세요.',
		'',
		'info'
	);
}