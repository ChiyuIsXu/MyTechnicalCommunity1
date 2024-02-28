package com.example.work4.controller;

import com.example.work4.domain.Article;
import com.example.work4.domain.Comment;
import com.example.work4.json.Result;
import com.example.work4.serviceImpl.CommentServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class CommentController {
    @Autowired
    private CommentServiceImpl commentServiceImpl;
    @GetMapping("/comment/publish")
    public Result publish(Comment comment){
        log.debug("发布评论");
        return commentServiceImpl.publish(comment);
    }
    @GetMapping("/comment/list")
    public Result timeRank(){
        log.debug("按时间顺序获取评论列表");
        return commentServiceImpl.timeRank();
    }
}
