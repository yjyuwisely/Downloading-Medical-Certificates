package com.obj.model;

import java.sql.Date;

public class CertificateVO {
    private int id;
    private String name;
    private String residentid;
    private String disease;
    private Date admission_date;
    private Date discharge_date;
    private String operation;
    private Date surg_date;
    
    // Getters and Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getResidentid() {
        return residentid;
    }
    public void setResidentid(String residentid) {
        this.residentid = residentid;
    }
    public String getDisease() {
        return disease;
    }
    public void setDisease(String disease) {
        this.disease = disease;
    }
    public Date getadmission_date() {
        return admission_date;
    }
    public void setAdmissionDate(Date admission_date) {
        this.admission_date = admission_date;
    }
    public Date getdischarge_date() {
        return discharge_date;
    }
    public void setDischargeDate(Date discharge_date) {
        this.discharge_date = discharge_date;
    }
    public String getOperation() {
        return operation;
    }
    public void setOperation(String operation) {
        this.operation = operation;
    }
	public Date getSurg_date() {
		return surg_date;
	}
	public void setSurg_date(Date surg_date) {
		this.surg_date = surg_date;
	}
}