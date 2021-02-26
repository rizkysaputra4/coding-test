package nawadata;

import java.util.*;

public class No1 {

    static void factorial(int[] inputArray){
       Arrays.sort(inputArray);
       List<Object> list = Arrays.asList(inputArray);
       Collections.reverse(list);
       
       
        // Collections.reverse(Arrays.asList(inputArray));
        
        System.out.println(Arrays.toString(list.toArray()));

    }

    public static void main(String[] args) {
        int[] array = new int[]{3,4,1,2};
        factorial(array);
    }
}