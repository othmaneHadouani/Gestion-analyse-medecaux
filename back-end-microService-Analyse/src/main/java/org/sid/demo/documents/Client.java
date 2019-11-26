package org.sid.demo.documents;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {

    @Id
    private String code;
    private String nom;
    private String prenom;
    private String photo;

    @DBRef
    @JsonIgnore
    private ArrayList<Analyse> analyses;
}
