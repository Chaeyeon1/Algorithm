function solution(arr, divisor) {
    var answer = [];
    
    for (i=0; i<arr.length; i++) {
        arr[i] % divisor === 0 && answer.push(arr[i])
    }
    
    return answer.length>0? answer.sort((a, b) => {return a-b}): [-1];
}