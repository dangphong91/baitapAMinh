package com.phong.service;

import com.phong.model.Infor;
import com.phong.repository.IInforRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InforService implements IInforService {
    @Autowired
    private IInforRepository iInforRepository;

    @Override
    public Iterable<Infor> findAll() {
        return iInforRepository.findAll();
    }

    @Override
    public Optional<Infor> findById(Long id) {
        return iInforRepository.findById(id);
    }

    @Override
    public Infor save(Infor infor) {
        return iInforRepository.save(infor);
    }

    @Override
    public void remove(Long id) {
        iInforRepository.deleteById(id);
    }
}