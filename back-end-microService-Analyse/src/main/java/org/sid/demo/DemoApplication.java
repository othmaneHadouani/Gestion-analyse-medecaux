package org.sid.demo;

import org.sid.demo.dao.AnalyseRepository;
import org.sid.demo.dao.ClientRepository;
import org.sid.demo.documents.Analyse;
import org.sid.demo.documents.Client;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Date;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }


    @Bean
    CommandLineRunner commandLineRunner(ClientRepository clientRepository , AnalyseRepository analyseRepository){
        return strings ->{

            clientRepository.deleteAll();

            Client c1 = new Client("C1","Othmane","Hadouani","/Desktop/photo",new ArrayList<Analyse>());
            Client c2 = new Client("C2","Mohamed","Youssfi","/Desktop/photo1",new ArrayList<Analyse>());
            Client c3 = new Client("C2","Imad","Benmansour","/Desktop/photo2",new ArrayList<Analyse>());
            Client c4 = new Client("C2","Mohamed","Youssfi","/Desktop/photo3",new ArrayList<Analyse>());

            clientRepository.save(c1);
            clientRepository.save(c2);
            clientRepository.save(c3);
            clientRepository.save(c4);


            analyseRepository.deleteAll();

            Analyse a1 = new Analyse("A1","Analyse X",new Date(),50000,"res 1 ",true,c1);
            Analyse a2 = new Analyse("A2","Analyse 7",new Date(),7000,"res 2 ",true,c1);

            Analyse a3 = new Analyse("A3","Analyse 6",new Date(),3300,"res 3 ",true,c2);
            Analyse a4 = new Analyse("A4","Analyse 4",new Date(),8700,"res 4 ",true,c2);

            Analyse a5 = new Analyse("A5","Analyse 5",new Date(),8700,"res 4 ",true,c2);
            Analyse a6 = new Analyse("A6","Analyse 6",new Date(),8700,"res 4 ",true,c2);


            Analyse a7 = new Analyse("A7","Analyse 7",new Date(),8700,"res 4 ",true,c2);
            Analyse a8 = new Analyse("A8","Analyse 8",new Date(),8700,"res 4 ",true,c2);



            analyseRepository.save(a1);
            analyseRepository.save(a2);

            analyseRepository.save(a3);
            analyseRepository.save(a4);

            analyseRepository.save(a5);
            analyseRepository.save(a6);

            analyseRepository.save(a7);
            analyseRepository.save(a8);




            c1.getAnalyses().add(a1);
            c1.getAnalyses().add(a2);

            c2.getAnalyses().add(a3);
            c2.getAnalyses().add(a4);

            c3.getAnalyses().add(a5);
            c3.getAnalyses().add(a6);

            c4.getAnalyses().add(a7);
            c4.getAnalyses().add(a8);


            clientRepository.save(c1);
            clientRepository.save(c2);
            clientRepository.save(c3);
            clientRepository.save(c4);



        };
    }

}
