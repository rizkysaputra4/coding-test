package com;
import java.lang.String;
import java.util.Arrays;
public class Main {

    public static void main(String[] args) {
        String input = "nama saya rizky";   
        input.replaceAll("\\s+","");
        String[] splitted = input.split("");
        
        

        System.out.println(Arrays.toString(splitted));
    }
}