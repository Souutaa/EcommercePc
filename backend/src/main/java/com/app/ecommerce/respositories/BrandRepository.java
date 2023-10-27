package com.app.ecommerce.respositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.ecommerce.models.Brand;

public interface BrandRepository extends JpaRepository<Brand, Integer> {
    @Query(value = "select * from brand where brand_name = ?1", nativeQuery = true)
    Optional<Brand> findBrandByName(String name);

    @Query(value = "select * from brand where deleted_at is null", nativeQuery = true)
    List<Brand> findAllBrandlActive();

    @Query(value = "select * from brand where deleted_at is not null", nativeQuery = true)
    List<Brand> findAllBrandNotActive();
}
