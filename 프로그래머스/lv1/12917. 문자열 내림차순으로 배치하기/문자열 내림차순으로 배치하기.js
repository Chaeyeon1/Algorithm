function solution(s) {
    var answer = '';
    let arr = []
    
    for (i=0; i<s.length; i++) {
        arr.push(s.charCodeAt(i))
    }
    
    arr.sort((a, b) =>  b-a)
    
    for (i=0; i< arr.length; i++) {
        answer += String.fromCharCode(arr[i])
    }
    
    return answer;
}