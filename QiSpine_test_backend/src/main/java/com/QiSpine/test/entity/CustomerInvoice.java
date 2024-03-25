package com.QiSpine.test.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;


@Entity
public class CustomerInvoice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int invoiceNo;
	
	@Column(name="amount")
	@Min(0)
	private int amount;
	
	@Column(name="customerName")
	@NotNull
	@NotEmpty
	private String customerName;
	
	@Column(name="customerAddress")
	@Size(min=10, max=100)
	private String customerAddress;
	
	@Column(name="customerContact")
	@Min(111111111)
    @Max(999999999)
	private int customerContact;
	
	@Column(name = "date")
    @Temporal(TemporalType.DATE)
	@Past
    private Date date;

	public CustomerInvoice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CustomerInvoice(int invoiceNo, int amount, String customerName, String customerAddress, int customerContact,
			Date date) {
		super();
		this.invoiceNo = invoiceNo;
		this.amount = amount;
		this.customerName = customerName;
		this.customerAddress = customerAddress;
		this.customerContact = customerContact;
		this.date = date;
	}

	public int getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(int invoiceNo) {
		this.invoiceNo = invoiceNo;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public int getCustomerContact() {
		return customerContact;
	}

	public void setCustomerContact(int customerContact) {
		this.customerContact = customerContact;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
		
}
