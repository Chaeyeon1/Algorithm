function solution(number) {
    var answer = 0;
    
    for(i=0; i<number.length; i++) {
        for(j=0; j<i; j++) {
            for (k=0; k<j; k++) {
                if(number[i]+ number[j] + number[k]===0) {
                    answer +=1
                }
            }
        }
    }
    return answer;
}