function solution(s) {
    var answer = true;
    
    for (i = 0; i<s.length; i++) {
       if(isNaN(s[i]) === true || (s.length !== 4 && s.length !== 6)) {
            answer = false;
            break;
        }
    }
    
    return answer;
}