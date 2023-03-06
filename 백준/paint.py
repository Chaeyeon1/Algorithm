def solution(n, m, section):
    answer = 0
    
    while(len(section)!=0):
        start = section[0]
    
        answer += 1
        for i in range(start, start+m):
            if(i>n):
                break
            if i in section:
                section.remove(i)
    
    return answer

print(solution(19, 4, [2,5,8,12,15,19]))