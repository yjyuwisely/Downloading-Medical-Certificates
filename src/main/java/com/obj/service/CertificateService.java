package com.obj.service;

import java.util.ArrayList;
import com.obj.model.MemberVO;

//This interface will define the methods for accessing the certificate data. 
public interface CertificateService {
	public ArrayList<MemberVO> GeneralDown(MemberVO member);
	public ArrayList<MemberVO> InoutDown(MemberVO member);
	public ArrayList<MemberVO> SergDown(MemberVO member);
}