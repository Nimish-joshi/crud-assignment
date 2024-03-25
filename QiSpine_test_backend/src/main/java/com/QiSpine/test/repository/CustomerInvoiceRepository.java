package com.QiSpine.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.QiSpine.test.entity.CustomerInvoice;

@Repository
public interface CustomerInvoiceRepository extends JpaRepository<CustomerInvoice,Integer> {

}
