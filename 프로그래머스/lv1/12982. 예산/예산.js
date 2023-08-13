function solution(d, budget) {
    var answer = 0;
    let count = 0;
    
    sort_array = d.sort((a,b) => {return a-b})
    
    answer = sort_array.reduce((acc, val, i, arr) => {
        if(acc+val<=budget) {
            count+=1
        } else {
            arr.splice(1)
        }
        
        return acc+val
    }, 0)
    
    return count;
}