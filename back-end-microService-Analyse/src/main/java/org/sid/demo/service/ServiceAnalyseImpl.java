package org.sid.demo.service;

import org.sid.demo.converters.Converter;
import org.sid.demo.dao.AnalyseRepository;
import org.sid.demo.documents.Analyse;
import org.sid.demo.forms.AnalyseForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ServiceAnalyseImpl implements IServiceAnalyse {


    @Autowired
    Converter converter;

    @Autowired
    public AnalyseRepository analyseRepository;




    @Override
    public Analyse addorUpdateAnalyse(AnalyseForm analyseForm) {

        Analyse analyse = converter.analyseFormToAnalysetAdd(analyseForm);
        analyse = analyseRepository.save(analyse);
        return analyse;
    }

    @Override
    public void deleteAnalyse(String idAnalyse) {
        analyseRepository.deleteById(idAnalyse);
    }

    @Override
    public void deleteAnalyse(Analyse analyse) {

        analyseRepository.delete(analyse);
    }

    @Override
    public Page<Analyse> listAnalyses(String motCle, Pageable pageable) {
        return this.analyseRepository.findAll(motCle,pageable);
    }

    @Override
    public Page<Analyse> listAnalysesByClient(String idAna, String motCle, Pageable pageable) {
        return this.analyseRepository.findAllByClient_Id(idAna,motCle,pageable);
    }



}
