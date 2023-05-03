<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%
request.setCharacterEncoding("utf-8");
%>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<title>회원가입</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<!-- Custom Google font-->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
	rel="stylesheet" />
<!-- Bootstrap icons-->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
	rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<!-- <link href="resources/css/styles.css" rel="stylesheet" /> -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<!-- Navigation-->
<jsp:include page="nav.jsp" flush="false" />

<!-- Contents -->
<body>
	<div data-aos="fade-right" data-aos-offset="300"
		data-aos-easing="ease-in-sine">
		<div class="container px-5 justify-content-center">
			<div class="row gx-5 justify-content-center">
				<div
					class="card shadow rounded-4 border-0 col-sm-8 col-md-6 col-lg-5 px-4 pt-4 pb-1 mb-5">
					<form action="memberJoin" method="post">
						<div class="text-left mb-4">
							<h1 class="fw-bolder">
								<span class="d-inline LogoGradient-text fs-1">회원 가입</span>
							</h1>
						</div>
						<!-- 1. 이메일 -->
						<div class="Sans form-floating text-muted mb-3">
							<input class="form-control" name="email" id="email" type="email"
								onchange="checkDupEmail(email)" placeholder="이메일" />
							<!-- onkeyup="emailCheck()"  -->
							<label for="email">이메일</label>
						</div>
						<!--  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))
						@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|
						(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})) -->
						<span style="color: #dc3545" id="emailMsg"></span>

						<!-- 2. 비밀번호 -->
						<div class="Sans form-floating text-muted mb-3">
							<input class="form-control" name="password" id="password"
								placeholder="비밀번호" type="password" required
								pattern="^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}" />
							<label for="password">비밀번호</label>
						</div>

						<!-- 3. 비밀번호 확인 -->
						<div class="Sans form-floating text-muted mb-3">
							<input class="form-control" name="passCk" id="passCk"
								placeholder="비밀번호 확인" type="password" required /> <label
								for="password">비밀번호 확인</label>
						</div>

						<!-- 4. 이름 -->
						<div class="Sans form-floating text-muted mb-3">
							<input class="form-control" name="name" id="name"
								placeholder="이름" type="text" required pattern="^[가-힣]{2,5}$">
							<label for="name">이름</label>
						</div>

						<!-- 5. 주민등록번호 -->
						<div class="Sans form-floating text-muted mb-3">
							<input class="form-control" name="residentid" id="residentid"
								placeholder="주민등록번호" type="text" required
								pattern="\d{6}[1-4]\d{6}" /> <label for="residentid">주민등록번호</label>
						</div>

						<!-- 6. 휴대폰 -->
						<div class="Sans form-floating text-muted mb-3">
							<input class="form-control" name="phone" id="phone"
								placeholder="휴대폰 번호" type="text" required
								pattern="01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$" /> <label
								for="phone">휴대폰 번호</label>
						</div>
						<!-- Submit Button-->
						<div class="Sans text-center pt-2 mb-4">
							<input type="submit" value="가입 완료"
								class="btn-1 bg-gradient-primary-to-secondary btn btn-primary btn-lg fs-4 fw-bolder d-inline-block col-12">
							<c:if test="${not empty errorMessage}">
								<div role="alert">${errorMessage}</div>
							</c:if>
						</div>
					</form>

					<!-- <form id="contactForm" data-sb-form-api-token="API_TOKEN">
						<div class="form-floating mb-3">
							<input class="form-control" id="email" type="email"
								placeholder="name@example.com"
								data-sb-validations="required,email" /> <label for="email">Email
								address</label>
							<div class="invalid-feedback" data-sb-feedback="email:required">An
								email is required.</div>
							<div class="invalid-feedback" data-sb-feedback="email:email">Email
								is not valid.</div>
						</div>
					</form> -->
				</div>
			</div>
		</div>
	</div>
	<!-- Footer-->
	<!-- 	<footer class="Sans mt-auto" style="text-shadow: 1px 1px 1px white">
		<div class=" px-5">
			<div class="row align-items-end  flex-column ">
				justify-content-between flex-sm-row
				<div class="col-auto small m-0">Copyright &copy; Ulsan Green
					Hospital by Team ABC 2023</div>
			</div>
		</div>
	</footer> -->
	<!-- Bootstrap core JS-->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
	<!-- Core theme JS-->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="resources/js/checkEmail.js"></script>
	<script src="resources/js/SignUp.js"></script>
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
	<script>
		AOS.init();
	</script>
</body>
</html>