function solution(num) {
    var answer = 0;
    let count = 0;
    
    while(1) {
        if(num === 1) {
            count = 0
            break
        }
        if(num % 2 ===0) {
            num /= 2
            count += 1
        } else {
            num = (num * 3) + 1
            count += 1
        }
        
        if(num === 1) {
            break;
        }
        
        if(count >= 500) {
            count = -1
            break;
        }
        
        
    }
    
    return count;
}