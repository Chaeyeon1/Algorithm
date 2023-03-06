def solution(n, m, section):
    answer = 0
    
    # n = 총 개수               8
    # m = 페인트 칠할 수 있는 개수 4
    # section = 몇 번이 비어있는지 2,3,6

    # 제일 작은 숫자로 가서, +m만큼을 탐색
    # 있으면 count+1하고 배열에서 있는 숫자들을 다 뺀다.
    # 그리고 그 다음 가장 작은 숫자로 간다. 반복

    while(len(section)!=0):
        start = min(section)
        end = max(section)
    
        answer += 1
        for i in range(start, start+m): # 예외처리 해줘야 할듯
            if i in section:
                section.remove(i)

        if(len(section) != 0):
            answer += 1
            for i in range(end-m+1, end+1): # 예외처리 해줘야 할듯
                if i in section:
                    section.remove(i)
    
    return answer

print(solution(19, 4, [2,5,8,12,15,19]))
