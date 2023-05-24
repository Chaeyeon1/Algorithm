function solution(k, score) {
    var answer = [];
    let answer_real = []
    
    for(i=0; i<score.length; i++) {
        if(answer.length < k) {
            answer.push(score[i])
        } else {
            answerMin = Math.min(...answer)
            if(score[i] > answerMin) {
                answer[answer.indexOf(answerMin)] = score[i]
            } 
        }
        answer_real.push(Math.min(...answer))
    }
    
    return answer_real;
}