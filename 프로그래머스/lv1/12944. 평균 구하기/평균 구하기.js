function solution(arr) {
    var answer = 0;
    
    answer = arr.reduce((a, c) => a + c) / arr.length
    
    return answer;
}