
// 1. Maximum and Minimum Element in an Array

public class Ex_1 {

    private static int[] MaxMinArray(int[] arr){
        int maxArrayElement= arr[0];
        int minArrayElement = arr[0];
        
        for(int i=1; i<arr.length; i++){

            // for Maximum Element
        
            if(maxArrayElement < arr[i]){
                maxArrayElement = arr[i];
            }

            // for Minimum Element
            
            if(minArrayElement > arr[i]){
                minArrayElement = arr[i];
            }
        }

        return new int[]{maxArrayElement, minArrayElement};
    }
    public static void main(String[] args) {
        int[] arr = {4, 2, 5, 1, 6, 3};
        
        int ans[] = MaxMinArray(arr);

        for(int res:ans){
            System.out.print(res + " "); // 6, 1
        }
        
    }
}
