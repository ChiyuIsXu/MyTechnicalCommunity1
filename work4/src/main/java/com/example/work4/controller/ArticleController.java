package com.example.work4.controller;

import com.example.work4.domain.Article;
import com.example.work4.json.Result;
import com.example.work4.serviceImpl.ArticleServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class ArticleController {
    @Autowired
    private ArticleServiceImpl articleServiceImpl;
    @GetMapping("/article/publish")
    public Result publish(Article article){
        log.debug("发布文章");
        return articleServiceImpl.publish(article);
    }
    @GetMapping("/article/popular")
    public Result clickRank(int size){
        log.debug("获取点击榜");
        return articleServiceImpl.clickRank(size);
    }
    @GetMapping("/article/new")
    public Result timeRank(int size,int num){
        log.debug("获取最新榜");
        return articleServiceImpl.timeRank(size,num);
    }
    @GetMapping("/article/recommend")
    public Result recommendRank(int size,int num){
        log.debug("获取推荐榜");
        return articleServiceImpl.recommendRank(size,num);
    }
    @GetMapping("/article/info")
    public Result getInfo(int id){
        log.debug("获取文章信息");
        return articleServiceImpl.getInfo(id);
    }
    @GetMapping("/article/search")
    public Result searchArticle(String keyword){
        log.debug("用关键字搜索文章");
        return articleServiceImpl.searchArticle(keyword);
    }
}
