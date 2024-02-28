package com.example.work4.service;

import com.example.work4.domain.User;
import com.example.work4.json.Result;

public interface UserService {
    Result regist(User user);
    Result login(User user);
    Result getInfo(String username);
    Result updateUserName(User user,String username);
    Result updatePassword(User user,String password);
    Result updateAvatar_url(User user,String avatar_url);
    Result personalArticle(User user,int size, int num);
    Result likeArticle(User user,int size,int num);
}
