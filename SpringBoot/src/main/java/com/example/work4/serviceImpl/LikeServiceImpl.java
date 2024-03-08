package com.example.work4.serviceImpl;

import com.example.work4.domain.Like;
import com.example.work4.json.Result;
import com.example.work4.mapper.LikeMapper;
import com.example.work4.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeServiceImpl implements LikeService {
    @Autowired
    private LikeMapper likeMapper;

    @Override
    public Result updateLikenum(int k, Like like) {
        Result result=new Result();
        result.setCode(-1);
        result.setData(null);
        switch (k) {
            case 1:
                try {
                    likeMapper.addArticleLike(like.getArticle_id());
                    likeMapper.add(like);
                    result.setMsg("点赞成功");
                    result.setCode(10000);
                } catch (Exception e) {
                    result.setMsg(e.getMessage());
                    e.printStackTrace();
                }
                break;
            case 2:
                try {
                    likeMapper.cancelArticleLike(like.getArticle_id());
                    likeMapper.delete(like);
                    result.setMsg("取消成功");
                    result.setCode(10000);
                } catch (Exception e) {
                    result.setMsg(e.getMessage());
                    e.printStackTrace();
                }
                break;
            case 3:
                try {
                    likeMapper.addCommentLike(like.getComment_id());
                    likeMapper.add(like);
                    result.setMsg("点赞成功");
                    result.setCode(10000);
                } catch (Exception e) {
                    result.setMsg(e.getMessage());
                    e.printStackTrace();
                }
                break;
            case 4:
                try {
                    likeMapper.cancelCommentLike(like.getComment_id());
                    likeMapper.delete(like);
                    result.setMsg("点赞成功");
                    result.setCode(10000);
                } catch (Exception e) {
                    result.setMsg(e.getMessage());
                    e.printStackTrace();
                }
                break;
        }
        return result;
    }
}
