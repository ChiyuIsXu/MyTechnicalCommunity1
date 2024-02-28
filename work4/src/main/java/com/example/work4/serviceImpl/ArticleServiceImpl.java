package com.example.work4.serviceImpl;

import com.example.work4.domain.Article;
import com.example.work4.json.Result;
import com.example.work4.mapper.ArticleMapper;
import com.example.work4.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService {
    @Autowired
    private ArticleMapper articleMapper;
    @Override
    public Result publish(Article article){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            articleMapper.publish(article);
            result.setMsg("发布成功");
            result.setCode(10000);
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    @Override
    public Result clickRank(int size){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            result.setMsg("排序成功");
            result.setCode(10000);
            result.setData(articleMapper.clickRank(size));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    @Override
    public Result timeRank(int size,int num){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            result.setMsg("排序成功");
            result.setCode(10000);
            result.setData(articleMapper.timeRank(size,num));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    @Override
    public Result recommendRank(int size,int num){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            result.setMsg("排序成功");
            result.setCode(10000);
            result.setData(articleMapper.recommendRank(size,num));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    @Override
    public Result getInfo(int id){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            Article article= articleMapper.getInfo(id);
            if (article == null) {
                result.setMsg("文章不存在");
            }else {
                result.setMsg("获取成功");
                result.setCode(10000);
                result.setData(article);
                articleMapper.updateClick(id);
            }
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    @Override
    public Result searchArticle(String keyword){
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            result.setMsg("排序成功");
            result.setCode(10000);
            result.setData(articleMapper.searchArticle(keyword));
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }


}
