function solution(n) {
    var answer = 0;
    
    for(i=1; i<n+1; i++){
        for (j=1; j<n+1; j++){
            if(i*j === n) {
                answer += i
            }
        }
    }
    return answer;
}