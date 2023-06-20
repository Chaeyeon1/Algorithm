function solution(arr) {
    var answer = [];
    
    answer = arr.filter((array) => array != Math.min(...arr))
    
    return answer.length>0? answer: [-1];
}