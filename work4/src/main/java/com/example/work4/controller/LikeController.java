package com.example.work4.controller;

import com.example.work4.domain.Like;
import com.example.work4.json.Result;
import com.example.work4.serviceImpl.LikeServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class LikeController {
    @Autowired
    private LikeServiceImpl likeServiceImpl;
    @GetMapping("/like/update")
    public Result updateLikenum(int k, Like like){
        log.debug("根据k模式更新点赞数");
        return likeServiceImpl.updateLikenum(k,like);
    }
}
