// ===============================
// 4. Contains Duplicate
// ===============================

// import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Ex_4 {

    private static boolean duplicateArray(int[] arr){
        // int n = arr.length;

        // Arrays.sort(arr);

        // for(int i=1; i<n; i++){
        //     if(arr[i] == arr[i-1]){
        //         return true;
        //     }
        // }
        // return false;

        // usind Set
        Set<Integer> set = new HashSet<>();

        for(int i:arr){
            if(set.contains(i)){
                return true;
            }
            set.add(i);
        }
        return false;

    }
    public static void main(String[] args) {

        int[] arr = {1,2,3,1};

        boolean ans = duplicateArray(arr);

        System.out.println(ans);
    }
}
