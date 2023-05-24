function solution(s) {
    var answer = [];
    let word = {}
    
    for (i=0; i<s.length; i++) {
        console.log(word[s[i]])
        word[s[i]]!==undefined? answer.push(i-word[s[i]]): answer.push(-1)
        
        word[s[i]] = i
    }
    
    return answer;
}