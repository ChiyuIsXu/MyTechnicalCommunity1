package com.example.work4.mapper;

import com.example.work4.domain.Like;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface LikeMapper {
    void add(Like like);
    void delete(Like like);
    void addArticleLike(int article_id);
    void cancelArticleLike(int article_id);
    void addCommentLike(int comment_id);
    void cancelCommentLike(int comment_id);
}
