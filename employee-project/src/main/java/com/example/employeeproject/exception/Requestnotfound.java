package com.example.employeeproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Requestnotfound extends  RuntimeException{
    private  static final  long serialversionid = 1L;

    public  Requestnotfound(String message){
        super(message);
    }

}
