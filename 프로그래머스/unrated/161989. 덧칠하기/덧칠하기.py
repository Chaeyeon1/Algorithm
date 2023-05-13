def solution(n, m, section):
    answer = 0
    start = 0
    
    for i in section:
        if start < i :
            start = i + m - 1
            answer += 1
    
    
    return answer