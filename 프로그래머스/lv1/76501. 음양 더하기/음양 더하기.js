function solution(absolutes, signs) {
    var answer = 0;
    
    absolutes.map((absolute, i) => {
        signs[i]? answer+= absolute : answer -= absolute
    })
    
    return answer;
}