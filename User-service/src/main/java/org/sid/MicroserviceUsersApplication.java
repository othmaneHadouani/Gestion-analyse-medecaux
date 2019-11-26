package org.sid;

import org.sid.entities.AppRole;
import org.sid.forms.UserForm;
import org.sid.service.AccountService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;


@SpringBootApplication
public class MicroserviceUsersApplication {

    public static void main(String[] args) {
        SpringApplication.run(MicroserviceUsersApplication.class, args);
    }
    @Bean
    CommandLineRunner start(AccountService accountService){
        return args->{
            accountService.save(new AppRole("USER"));
            accountService.save(new AppRole("ADMIN"));
            accountService.save(new AppRole("ANALYSE_MANAGER"));

            Stream.of("user1","admin","analyse_manager").forEach(un->{
                accountService.saveUser(new UserForm(un,"1234","1234"));
            });


            accountService.addRoleToUser("admin","ADMIN");
            accountService.addRoleToUser("admin","ANALYSE_MANAGER");
            accountService.addRoleToUser("analyse_manager","ANALYSE_MANAGER");



        };
    }
    @Bean
    BCryptPasswordEncoder getBCPE(){
        return new BCryptPasswordEncoder();
    }
}
