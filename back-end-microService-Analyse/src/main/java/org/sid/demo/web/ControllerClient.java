package org.sid.demo.web;


import org.sid.demo.converters.Converter;
import org.sid.demo.documents.Client;
import org.sid.demo.forms.ClientForm;
import org.sid.demo.service.ServiceClientImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/clients")
public class ControllerClient {

    @Autowired
    public ServiceClientImpl serviceClient;

    @Autowired
    public Converter converter;

    @PostMapping("/addClient")
    public Client addProduct(@RequestBody ClientForm clientForm){

        return serviceClient.addorUpdateClient(clientForm);

    }

    @PutMapping("/editClient")
    public Client editProduct(@RequestBody ClientForm categoryForm){

        return serviceClient.addorUpdateClient(categoryForm);

    }


    @RequestMapping(value="/getAllClients",method = RequestMethod.GET)
    public Page<Client> listCategories(@RequestParam(name = "size",defaultValue = "4")int size,
                                       @RequestParam(name = "page",defaultValue = "0")int page,
                                       @RequestParam(name = "motCle",defaultValue ="")String motCle ){

        Pageable pageable = PageRequest.of(page, size);
        return serviceClient.listClients(motCle,pageable);

    }

    @GetMapping("/getListClients")
    public List<Client> listCategories(){
        return serviceClient.listClients();
    }


    @DeleteMapping("/delete/{idClient}")
    public void removeProduct(@PathVariable("idClient") String idClient){

        serviceClient.deleteClient(idClient);
    }

}
