package com.ecommerce.repository;

import com.ecommerce.model.ShippingDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingDetailsRepo extends JpaRepository<ShippingDetails, Long > {
}
