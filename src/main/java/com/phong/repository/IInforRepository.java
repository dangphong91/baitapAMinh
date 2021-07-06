package com.phong.repository;

import com.phong.model.Infor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IInforRepository extends JpaRepository<Infor, Long> {
}