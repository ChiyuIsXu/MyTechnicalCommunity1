package com.example.work4.mapper;

import com.example.work4.domain.User;
import com.example.work4.json.Result;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {
    void regist(User user);
    User login(User user);
    User getInfo(String username);
    int updateUserName(User user);
    int updatePassword(User user);
    int updateAvatar_url(User user);
    List personalArticle(int auther_id, int size, int num);
    List likeArticle(int user_id,int size,int num);
}
