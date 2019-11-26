package org.sid.demo.service;

import org.sid.demo.converters.Converter;
import org.sid.demo.dao.ClientRepository;
import org.sid.demo.documents.Client;
import org.sid.demo.forms.ClientForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ServiceClientImpl implements IServiceClient {


    @Autowired
    public ClientRepository clientRepository;

    @Autowired
    public Converter converter;


    @Override
    public Client addorUpdateClient(ClientForm clientForm) {
        Client client = converter.clientFormToClient(clientForm);
        return clientRepository.save(client);
    }

    @Override
    public void deleteClient(String idClient) {

        clientRepository.deleteById(idClient);
    }

    @Override
    public void deleteClient(Client client) {
        clientRepository.delete(client);
    }

    @Override
    public Page<Client> listClients(String motCle, Pageable pageable) {
       return this.clientRepository.findAll(motCle,pageable);
    }

    @Override
    public List<Client> listClients() {
        return this.clientRepository.findAll();
    }

    @Override
    public Optional<Client> getClientById(String id) {
         return clientRepository.findById(id);
    }
}
