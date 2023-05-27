function solution(ingredient) {
    var answer = 0;
        
    for (let i = 0; i<ingredient.length; i++) {
        if(JSON.stringify(ingredient.slice(i, i+4)) === JSON.stringify([1, 2, 3, 1]))          {
            ingredient.splice(i, 4)
            answer += 1
            
            i -= 3
        }
    }
        
    return answer;
}