
let arr= [2,1,6,4,8,3,2,0,1,9]; k = 3;

function maxSubArr(arr,k){
    let sum = arr[0]+arr[1]+arr[2];
    let maxsum = sum;
    for(let i =k; i<arr.length-1; i++){
        sum += arr[i] - arr[i-k];
        maxsum = Math.max(sum, maxsum)
    };
    return maxsum
}
console.log(maxSubArr(arr,k))

function minSumArr(arr,k){
    let minsum = arr[0]+arr[1]+arr[2];
    let minInSubArr = minsum;
    for(let i=k; i<arr.length-1; i++){
        minsum += arr[i] - arr[i-k];
        minInSubArr = Math.min(minsum,minInSubArr)
    }
    return minInSubArr
}

console.log(minSumArr(arr,k))