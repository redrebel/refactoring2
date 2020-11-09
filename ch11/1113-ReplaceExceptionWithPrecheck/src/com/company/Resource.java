package com.company;

public class Resource {
    public static Resource create(){
        System.out.println("Resource Created!");
        return new Resource();
    }
}
