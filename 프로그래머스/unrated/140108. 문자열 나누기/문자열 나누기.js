function solution(s) {

    let check = 0;
    let left = 1;
    let right = 0;
    let start = 1;
    let len = 0;
        if(s.length===1){
            check += 1
        } else {
            for(let i = start; i < s.length; i++){
            // s[start-1] = s[1] = a // s[i] = n
            if(s[start-1] == s[i]){
                left += 1
            } else{
                right += 1
            }

            if(right == left){
                check += 1
                // 잘라 나간 수를 구해야함!!!
                start = i+2
            }
            
            if(right !== left && i === s.length-1) {
                check += 1
            }
        }
        }
    
//     같았을 때 : 왼손, 다르면 오른손
//     check = 1, left = 1, right = 1, start = 2, len = 0, i = 2, s.length = 6
        
    return check
}