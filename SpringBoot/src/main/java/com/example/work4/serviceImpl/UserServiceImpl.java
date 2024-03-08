package com.example.work4.serviceImpl;

import com.example.work4.domain.User;
import com.example.work4.mapper.UserMapper;
import com.example.work4.json.Result;
import com.example.work4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public Result regist(User user){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            //缺少判断输入的用户名和密码的合法性
            User user1=userMapper.getInfo(user.getUsername());
            if (user1 != null) {
                result.setMsg("用户名已存在");
            }else {
                userMapper.regist(user);
                result.setMsg("注册成功");
                result.setCode(10000);
                result.setData(user);
            }
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
            return result;
    }

    @Override
    public Result login(User user) {
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            User user1=userMapper.login(user);
            if (user1.getId()==-1) {
                result.setMsg("用户名或密码错误");
            }else {
                result.setMsg("登陆成功");
                result.setCode(10000);
                result.setData(userMapper.login(user));
            }
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Result getInfo(String username) {
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            User user1=userMapper.getInfo(username);
            if (user1.getId()==-1) {
                result.setMsg("用户名不存在");
            }else {
                result.setMsg("获取信息成功");
                result.setCode(10000);
                result.setData(userMapper.getInfo(username));
            }
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Result updateUserName(User user,String username) {
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            user.setUsername(username);
            userMapper.updateUserName(user);
            result.setMsg("修改成功");
            result.setCode(10000);
            result.setData(userMapper.login(user));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Result updatePassword(User user,String password) {
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            user.setPassword(password);
            userMapper.updatePassword(user);
            result.setMsg("修改成功");
            result.setCode(10000);
            result.setData(userMapper.login(user));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Result updateAvatar_url(User user,String avatar_url) {
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            user.setAvatar_url(avatar_url);
            userMapper.updateAvatar_url(user);
            result.setMsg("修改成功");
            result.setCode(10000);
            result.setData(userMapper.login(user));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    @Override
    public Result personalArticle(User user,int size,int num){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            result.setMsg("排序成功");
            result.setCode(10000);
            result.setData(userMapper.personalArticle(user.getId(),size,num));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Result likeArticle(User user, int size, int num) {
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            result.setMsg("排序成功");
            result.setCode(10000);
            result.setData(userMapper.likeArticle(user.getId(),size,num));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
}
