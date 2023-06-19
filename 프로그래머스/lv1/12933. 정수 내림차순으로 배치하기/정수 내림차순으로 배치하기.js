function solution(n) {
    var answer = 0;
    num = Number(n)
    arr = []
    
    // console.log(num / 10)
    
    while(num !== 0) {
        arr.push(num % 10)
        num = parseInt(num / 10)
    }
    
    answer = Number(arr.sort(function(a, b) {
        return b-a
    }).join(""))
    
    return answer;
}