function solution(k, m, score) {
    var answer = 0;
    let i = 0
    let min = 100
    
    score.sort(function(a, b) {
        return b - a
    })
    
    for (i=0; i< score.length; i++) {
        if(score[i+(m-1)]) {
            for (j=0; j<m; j++) {
                score[i+j]<min && (min = score[i+j])
            }
            i += (m-1)
            
            answer += min * m
            
        }
        
    }
    
    console.log(score)
    
    return answer;
}

// 1, 2, 1, 2, 4, 2

// 4, 4, 4 / 4, 4, 2 / 4, 2, 2 / 2, 1, 1 

// 4 * 3  + 4 *