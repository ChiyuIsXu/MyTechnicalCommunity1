package com.example.work4.service;

import com.example.work4.domain.Article;
import com.example.work4.json.Result;

public interface ArticleService {
    Result publish(Article article);
    Result clickRank(int size);
    Result timeRank(int size,int num);
    Result recommendRank(int size,int num);
    Result getInfo(int id);
    Result searchArticle(String keyword);
}
