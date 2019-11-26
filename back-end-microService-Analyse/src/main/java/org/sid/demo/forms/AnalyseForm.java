package org.sid.demo.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.sid.demo.documents.Client;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AnalyseForm {

    private String id;
    private String nom;
    private Date date;
    private double prix;
    private String resultat;
    private boolean isResConnu;
    private ClientForm clientForm;


}
