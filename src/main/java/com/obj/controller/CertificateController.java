package com.obj.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.obj.model.MemberCertJoinVO;
import com.obj.service.CertificateService;

@Controller
public class CertificateController {
	// used to log messages for a specific system or application component.
	private static final Logger logger = LoggerFactory.getLogger(CertificateController.class);
	
	@Autowired
	CertificateService certServ;
	
	@GetMapping("/Issue")
	public String Issue(Model model, MemberCertJoinVO member, HttpSession session){
		// model.addAttribute(String name, Object value);
		//: value 객체를 name 이름으로 추가함. 뷰 코드에서는 name으로 지정한 이름을 통해서 value를 사용함.
		// Add certificate data to model for JSP rendering
		model.addAttribute("cert", certServ.Issue(member));
		logger.info("Issue = {}", member);
		return "/Issue";
	}
	
	//진료확인서
	@GetMapping("/GeneralDown")
	public String GeneralDown(Model model, MemberCertJoinVO member, HttpSession session){
		// model.addAttribute(String name, Object value);
		//: value 객체를 name 이름으로 추가함. 뷰 코드에서는 name으로 지정한 이름을 통해서 value를 사용함.
		// Add certificate data to model for JSP rendering
		model.addAttribute("cert", certServ.GeneralDown(member));
		logger.info("General certificate download. = {}", member);
		return "/GeneralDown";
	}
	
	//입,퇴원확인서
	@GetMapping("/InoutDown")
	public String InoutDown(Model model, MemberCertJoinVO member, HttpSession session){
		model.addAttribute("cert", certServ.InoutDown(member));
		logger.info("Hospitalization certificate download. = {}", member);
		return "/InoutDown";
	}
	
	//수술확인서
	@GetMapping("/SergDown")
	public String SergDown(Model model, MemberCertJoinVO member, HttpSession session){
		model.addAttribute("cert", certServ.SergDown(member));
		logger.info("Surgical certificate download. {}", member);
		return "/SergDown";
	}
	
	//진료확인서
//	@GetMapping("/GeneralDown")
//	public String GeneralDown(HttpSession session, MemberCertJoinVO member, Model model){
//		// session저장되어 있는 id값 가져와서 MemberCertJoinVO에 id변수에 저장(setId메서드 이용)
//	    // Retrieve id from session
//	    String userId = session.getId();
//	    // Create new MemberCertJoinVO object and set id
//	   // MemberCertJoinVO member = new MemberCertJoinVO();
//	    member.setId(userId);
//	  
//	    MemberCertJoinVO DownCert = certServ.GeneralDown(member); 
//	    // Retrieve certificate data and store in session 
//	    //세션에 값을 저장한다. setAttribute("속성", "값") 
//	    // ex) session.setAttribute("MEMBERID","madvirus"), session.setAttribute("NAME","최범균") 
//	    session.setAttribute("certificate", DownCert);
//		// model.addAttribute(String name, Object value);
//		//: value 객체를 name 이름으로 추가함. 뷰 코드에서는 name으로 지정한 이름을 통해서 value를 사용함.
//	    // Add certificate data to model for JSP rendering
//	    model.addAttribute("certificate", DownCert);
//	    logger.info("This is for General certificate download. = {}", member);
//	    return "/GeneralDown";
//	}
}
