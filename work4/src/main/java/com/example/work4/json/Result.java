package com.example.work4.json;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Result<T> {
    private int code;
    private String msg;
    private T data;
}
