// =================================
//     2. Reverse the Array
// =================================
public class Ex_2 {

    public static int[] reverseArray(int[] arr) {
        int start = 0;
        int end = arr.length-1;

        while (start < end) {

            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
        return arr;
    }

    public static void main(String[] args) {

        int[] arr = {4, 2, 5, 1, 6, 3};

        int[] ans = reverseArray(arr);

        for(int res: ans){
            System.out.print(res + " "); // 3 6 1 5 2 4 
        }
    }
}
