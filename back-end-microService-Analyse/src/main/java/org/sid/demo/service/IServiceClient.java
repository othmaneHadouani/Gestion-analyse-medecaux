package org.sid.demo.service;

import org.sid.demo.documents.Client;
import org.sid.demo.forms.ClientForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IServiceClient {

    public Client addorUpdateClient(ClientForm clientForm);
    public void deleteClient(String idClient);
    public void deleteClient(Client client);
    public Page<Client> listClients(String motCle, Pageable pageable);
    public List<Client> listClients();
    public Optional<Client> getClientById(String id);
}
