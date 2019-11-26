package org.sid.demo.forms;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ClientForm {

    private String code;
    private String nom;
    private String prenom;
    private String photo;

}
