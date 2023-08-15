function solution(s) {
    var answer = '';
    
   while(s) {
        if(s.substr(0, 1) < '0' || s.substr(0, 1) > '9') { 
            if(s.substr(0, 3) === 'one') {
                s = s.substring(3)
                answer += '1'
            }else if(s.substr(0, 4) === 'zero') {
                s = s.substring(4)
                answer += '0'
            }else if(s.substr(0, 3) === 'two') {
                s = s.substring(3)
                answer += '2'
            }else if(s.substr(0, 5) === 'three') {
                s = s.substring(5)
                answer += '3'
            }else if(s.substr(0, 4) === 'four') {
                s = s.substring(4)
                answer += '4'
            }else if(s.substr(0, 4) === 'five') {
                s = s.substring(4)
                answer += '5'
            }else if(s.substr(0, 3) === 'six') {
                s = s.substring(3)
                answer += '6'
            }else if(s.substr(0, 5) === 'seven') {
                s = s.substring(5)
                answer += '7'
            }else if(s.substr(0, 5) === 'eight') {
                s = s.substring(5)
                answer += '8'
            }else if(s.substr(0, 4) === 'nine') {
                s = s.substring(4)
                answer += '9'
            } 
        } else {
            answer += s.substr(0,1)
            s = s.substring(1)
        }
   }
    
    return Number(answer);
}