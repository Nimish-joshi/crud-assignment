package com.QiSpine.test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.QiSpine.test.entity.CustomerInvoice;
import com.QiSpine.test.exception.ResourceNotFoundException;
import com.QiSpine.test.repository.CustomerInvoiceRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/data")
@Validated
public class CustomerController {
	
	@Autowired
	private CustomerInvoiceRepository customerInvoiceRepository;
	
	@GetMapping("/user")
	public List<CustomerInvoice> getInvoiceList() {
		return customerInvoiceRepository.findAll();
	}
	
	@PostMapping("/user")
	public CustomerInvoice createCustomers(@Valid @RequestBody CustomerInvoice customerInvoice) {
		return customerInvoiceRepository.save(customerInvoice);
	}
	
	@GetMapping("/user/{invoiceNo}")
	public ResponseEntity<CustomerInvoice> getCustomerById(@PathVariable int invoiceNo) {
		CustomerInvoice customer = customerInvoiceRepository.findById(invoiceNo)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + invoiceNo));
		return ResponseEntity.ok(customer);
	}
	
	// update employee rest api
	
	@PutMapping("/user/{invoiceNo}")
	public ResponseEntity<CustomerInvoice> updateCustomer(@PathVariable int invoiceNo, @RequestBody CustomerInvoice customerInvoice){
		CustomerInvoice customer = customerInvoiceRepository.findById(invoiceNo)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + invoiceNo));
		
		customer.setCustomerName(customerInvoice.getCustomerName());
		customer.setCustomerAddress(customerInvoice.getCustomerAddress());
		customer.setCustomerContact(customerInvoice.getCustomerContact());
		customer.setAmount(customerInvoice.getAmount());
		customer.setDate(customerInvoice.getDate());
		
		
		CustomerInvoice updatedcustomer = customerInvoiceRepository.save(customer);
		return ResponseEntity.ok(updatedcustomer);
	}
	
	 
	@DeleteMapping("/user/{invoiceNo}")
	public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable int invoiceNo){
		CustomerInvoice customer = customerInvoiceRepository.findById(invoiceNo)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + invoiceNo));
		
		customerInvoiceRepository.delete(customer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
