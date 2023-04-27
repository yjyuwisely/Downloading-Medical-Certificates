package com.obj.service;

import java.util.ArrayList;

import com.obj.model.CertificateVO;

//This interface will define the methods for accessing the certificate data. 
public interface CertificateService {
	public ArrayList<CertificateVO> GeneralDown(CertificateVO member);
	public ArrayList<CertificateVO> InoutDown(CertificateVO member);
	public ArrayList<CertificateVO> SergDown(CertificateVO member);
}