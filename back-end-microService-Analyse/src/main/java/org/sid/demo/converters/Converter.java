package org.sid.demo.converters;

import org.sid.demo.documents.Analyse;
import org.sid.demo.documents.Client;
import org.sid.demo.forms.AnalyseForm;
import org.sid.demo.forms.ClientForm;
import org.sid.demo.service.IServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
public class Converter {

    @Autowired
    IServiceClient iServiceClient;

    public Analyse analyseFormToAnalysetAdd(AnalyseForm analyseForm){

        Analyse analyse = new Analyse();

        analyse.setId(analyseForm.getId());

        analyse.setDate(new Date());
        analyse.setNom(analyseForm.getNom());
        analyse.setResultat(analyseForm.getResultat());
        analyse.setResConnu(analyseForm.isResConnu());

        Client client = iServiceClient.getClientById(analyseForm.getClientForm().getCode()).get();  //this.categoryFormToCategory(productForm.getCategory());
        analyse.setClient(client);


        return analyse;
    }

    public Client clientFormToClient(ClientForm clientForm){

        Client client = new Client();
        client.setCode(clientForm.getCode());
        client.setNom(clientForm.getNom());
        client.setPrenom(clientForm.getPrenom());
        client.setPhoto(clientForm.getPhoto());

        return client;
    }
}
