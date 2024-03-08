package com.example.work4.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@NoArgsConstructor
public class Article {
    private int id;
    private int auther_id;
    private String cover_url;
    private String title;
    private String content;
    private int commentnum;
    private int clicknum;
    private int likenum;
    private String update_time;

    public Article(int id, int auther_id, String cover_url, String title, String content) {
        this.id = id;
        this.auther_id = auther_id;
        this.cover_url = cover_url;
        this.title = title;
        this.content = content;
        this.commentnum = 0;
        this.clicknum = 0;
        this.likenum = 0;
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.update_time = simpleDateFormat.format(date);
    }
}
