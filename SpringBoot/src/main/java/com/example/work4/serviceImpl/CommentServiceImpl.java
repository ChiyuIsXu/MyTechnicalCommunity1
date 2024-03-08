package com.example.work4.serviceImpl;

import com.example.work4.domain.Comment;
import com.example.work4.json.Result;
import com.example.work4.mapper.CommentMapper;
import com.example.work4.service.CommrntService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommrntService {
    @Autowired
    private CommentMapper commentMapper;

    @Override
    public Result publish(Comment comment) {
        Result result = new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            commentMapper.publish(comment);
            if (comment.getParent_id() != -1 && comment.getArticle_id() == -1) {
                commentMapper.updateChild_count(comment.getParent_id());
                result.setMsg("发布成功");
                result.setCode(10000);
            }else if (comment.getParent_id()==-1&&comment.getArticle_id()!=-1){
                commentMapper.updateCommentnum(comment.getArticle_id());
                result.setMsg("发布成功");
                result.setCode(10000);
            }else {
                result.setMsg("错误：文章id和评论id同时出现");
            }
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Result timeRank() {
        Result result = new Result();
        result.setCode(-1);
        result.setData(null);
        try {
            result.setMsg("排序成功");
            result.setCode(10000);
            result.setData(commentMapper.timeRank());
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
}

