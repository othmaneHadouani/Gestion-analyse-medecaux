package org.sid.demo.documents;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Analyse {
    @Id
    private String id;

    private String nom;
    private Date date;
    private double prix;
    private String resultat;
    private boolean isResConnu;

    @DBRef
    private Client client;
}
