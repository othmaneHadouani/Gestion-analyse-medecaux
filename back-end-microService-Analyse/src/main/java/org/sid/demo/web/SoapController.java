package org.sid.demo.web;

import org.sid.demo.dao.ClientRepository;
import org.sid.demo.documents.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import java.util.List;

@Component
@WebService(name = "analyseWebService")
public class SoapController {

    @Autowired
    private ClientRepository clientRepository;

    @WebMethod
    public List<Client> searchedClients(@WebParam(name = "mc") String mc) {
        return clientRepository.findByNomContains(mc);
    }
}