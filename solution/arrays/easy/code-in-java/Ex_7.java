// ============================
//  7. Pascal's Triangle 
//  numRows = 5
//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1
// ============================

import java.util.ArrayList;
import java.util.List;

public class Ex_7 {    
    
    public static List<List<Integer>> generate(int numRows){
        List<List<Integer>> triangle = new ArrayList<List<Integer>>();
        
        if(numRows<1){
            return triangle;
        }
        for(int i=0; i<numRows; i++){
            List<Integer> num = new ArrayList<Integer>();
            for(int j=0; j<i+1; j++){
                if(j==0 || j==i){
                    num.add(1);
                }
                else{
                    num.add(triangle.get(i-1).get(j-1) + triangle.get(i-1).get(j));
                }
            }
            triangle.add(num);
        }
        return triangle;
    }    


    public static void main(String[] args) {
        int numRows = 5;        
        List<List<Integer>> triangle = generate(numRows);
        for (List<Integer> row : triangle) {
            int numSpaces = numRows - row.size();
            for (int i = 0; i < numSpaces; i++) {
                System.out.print(" ");
            }
            for(int nums: row){
                System.out.print(nums+" ");
            }
            System.out.println();            
        }
    }
}

    