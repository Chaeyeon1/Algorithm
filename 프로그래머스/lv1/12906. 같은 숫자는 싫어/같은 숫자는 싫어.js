function solution(arr)
{
    var answer = [];
    let currentNumber = -1

    arr.map((a, i) => {
        if(currentNumber !== a) {
            answer.push(a)
        }
        
        currentNumber = a
    })
    
    return answer;
}