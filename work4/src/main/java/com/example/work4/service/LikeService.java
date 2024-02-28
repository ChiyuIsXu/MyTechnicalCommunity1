package com.example.work4.service;

import com.example.work4.domain.Like;
import com.example.work4.json.Result;

public interface LikeService {
    Result updateLikenum(int k, Like like);
}
