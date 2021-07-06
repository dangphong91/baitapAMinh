package com.phong.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty
    private String email;

    @NotEmpty
    @Size(min = 6, max = 10)
    private String password;


    public User(@NotEmpty String email, @NotEmpty @Size(min = 6, max = 10) String password) {
        this.email = email;
        this.password = password;
    }

}
