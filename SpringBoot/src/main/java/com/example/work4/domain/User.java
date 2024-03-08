package com.example.work4.domain;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class User {
    private int id;
    private String username;
    private String password;
    private String phonenum;
    private String email;
    private String avatar_url; //头像
    private String intro;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
