def solution(n, m, section):
    answer = 0
    
    arr = [0 for _ in range(n+1)]
    for i in section:
        arr[i] = 1
    
    paint = 0

    while(paint<=n):
        if(arr[paint] == 1):
            answer += 1

            paint+= m
        else:
            paint += 1
   
    return answer

print(solution(19, 4, [2,5,8,12,15,19]))