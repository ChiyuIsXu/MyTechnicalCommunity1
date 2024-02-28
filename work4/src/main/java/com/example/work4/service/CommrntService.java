package com.example.work4.service;

import com.example.work4.domain.Comment;
import com.example.work4.json.Result;

public interface CommrntService {
    Result publish(Comment comment);
    Result timeRank();
}
