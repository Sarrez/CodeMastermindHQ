// ============================================
// 3. Maximum-Subarray (Kadane's Algorithm)
// ============================================
public class Ex_3 {

    public static int maxSubArray(int[] arr){
        int currentSum = arr[0];
        int maxSum = arr[0];

        for(int i=1; i<arr.length; i++){
            currentSum = Math.max(currentSum + arr[i], arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
    public static void main(String[] args) {
        int[] arr = {-2,1,-3,4,-1,2,1,-5,4};

        int ans = maxSubArray(arr);

        System.out.println(ans); //  6
    }
}
