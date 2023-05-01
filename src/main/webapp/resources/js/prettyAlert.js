/**
 * 
 */

console.log("pretty connect!");
$(document).ready(function () {
	$('#testBtn').click(function () {
		Swal.fire({
			  position: 'top-end',
			  icon: 'success',
			  title: 'Your work has been saved',
			  showConfirmButton: false,
			  timer: 1500
			})
//		Swal.fire({
//			icon: 'success',
//			title: 'Success!',
//			text: 'Your request has been successfully processed.',
//			showCancelButton: false,
//			confirmButtonColor: '#3085d6',
//			confirmButtonText: 'OK'
//		}).then((result) => {
//			if (result.isConfirmed) {
//				// 확인 버튼을 눌렀을 때 실행할 코드
//				console.log('OK button clicked');
//			}
//		})
	})
});

