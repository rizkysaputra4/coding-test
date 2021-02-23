package com.tutorial;

public class test2 {
    public static void main(String[] args) {
        int input = 25;
        int x1 = 0;
        int x2 = 1;
        for (int i = 1; i <= input; i++){
           System.out.print(" " + x1);
           int x3 = x1+x2;
           x1 = x2;
           x2 = x3; 
        }
    }

}