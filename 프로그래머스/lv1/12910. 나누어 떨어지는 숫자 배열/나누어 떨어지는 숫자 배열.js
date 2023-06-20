function solution(arr, divisor) {
    var answer = [];

    answer = arr.filter((array, i) => array % divisor === 0)
    
    return answer.length>0? answer.sort((a, b) => {return a-b}): [-1];
}