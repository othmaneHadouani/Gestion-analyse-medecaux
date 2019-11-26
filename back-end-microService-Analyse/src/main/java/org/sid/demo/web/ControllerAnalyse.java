package org.sid.demo.web;
import org.sid.demo.documents.Analyse;
import org.sid.demo.forms.AnalyseForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.sid.demo.converters.Converter;
import org.sid.demo.service.ServiceAnalyseImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/analyses")
public class ControllerAnalyse {

    @Autowired
    public ServiceAnalyseImpl serviceAnalyse;

    @Autowired
    public Converter converter;

    @PostMapping("/addAnalyse")
    public Analyse addAnalyse(@RequestBody AnalyseForm analyseForm){


        return serviceAnalyse.addorUpdateAnalyse(analyseForm);

    }

    @PutMapping("/editAnalyse")
    public Analyse editAnalyse(@RequestBody AnalyseForm analyseForm){

        return serviceAnalyse.addorUpdateAnalyse(analyseForm);

    }

    @RequestMapping(value = "/getAllAnalyses" ,method = RequestMethod.GET)
    public Page<Analyse> listAnalyses(@RequestParam(name = "size",defaultValue = "4")int size,
                                      @RequestParam(name = "page",defaultValue = "0")int page,
                                      @RequestParam(name = "motCle",defaultValue ="")String motCle ){


        Pageable pageable = PageRequest.of(page, size);
        return serviceAnalyse.listAnalyses(motCle,pageable);
    }



    @DeleteMapping(path = "/delete/{idAnalyse}")
    public void deleteAnalyse(@PathVariable("idAnalyse") String idAnalyse){

        serviceAnalyse.deleteAnalyse(idAnalyse);
    }

    @RequestMapping(value = "/getAnalysesByClient/{idClient}" ,method = RequestMethod.GET)
    public Page<Analyse> listAnalyses(@RequestParam(name = "size",defaultValue = "4")int size,
                                      @RequestParam(name = "page",defaultValue = "0")int page,
                                      @RequestParam(name = "motCle",defaultValue ="")String motCle,
                                      @PathVariable("idClient") String idCat
                                      ){


        Pageable pageable = PageRequest.of(page, size);
        return serviceAnalyse.listAnalysesByClient(idCat,motCle,pageable);
    }



}
