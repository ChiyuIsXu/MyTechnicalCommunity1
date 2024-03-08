package com.example.work4.controller;

import com.example.work4.domain.User;
import com.example.work4.json.Result;
import com.example.work4.serviceImpl.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;
    @GetMapping("/user/register")
    public Result regist(User user){
        log.debug("注册");
        return userServiceImpl.regist(user);
    }
    @GetMapping("/user/login")
    public Result login(User user){
        log.debug("登陆");
        return userServiceImpl.login(user);
    }
    @GetMapping("/user/info")
    public Result getInfo(String username){
        log.debug("获取用户信息");
        return userServiceImpl.getInfo(username);
    }
    @GetMapping("user/name/change")
    public Result updateUsername(User user,String username){
        log.debug("更改用户名");
        return userServiceImpl.updateUserName(user,username);
    }
    @GetMapping("user/password/change")
    public Result updatePassword(User user,String password){
        log.debug("更改密码");
        return userServiceImpl.updatePassword(user,password);
    }
    @GetMapping("user/avatar/change")
    public Result updateAvatar_url(User user,String avatar_url){
        log.debug("更改头像");
        return userServiceImpl.updateAvatar_url(user,avatar_url);
    }
    @GetMapping("/article/list")
    public Result personalArticle(User user,int size,int num){
        log.debug("个人文章列表");
        return userServiceImpl.personalArticle(user, size, num);
    }
    @GetMapping("/like/list")
    public Result likeArticle(User user, int size, int num) {
        log.debug("个人点赞列表");
        return userServiceImpl.likeArticle(user, size, num);
    }
}
