package org.sid.demo.service;

import org.sid.demo.documents.Analyse;
import org.sid.demo.forms.AnalyseForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IServiceAnalyse {

    public Analyse addorUpdateAnalyse(AnalyseForm analyseForm);
    public void deleteAnalyse(String idAnalyse);
    public void deleteAnalyse(Analyse analyse);
    public Page<Analyse> listAnalyses(String motCle, Pageable pageable);
    Page<Analyse> listAnalysesByClient(String idAna, String motCle, Pageable pageable);
}
