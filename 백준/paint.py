def binary_search(target, data):
    start = 0
    end = len(data) - 1
    while start <= end:
        mid = (start + end)

        if data[mid] == target:
            return mid

        elif data[mid] < target:
            start = mid + 1
        
        else:
            end = mid - 1
    
    return -1

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
            if(1<i<100000):

        #     if i in section:
        #         section.remove(i)
                index = binary_search(i, section)

                if(i>n):
                    index = -1
                if(index !=-1):
                    # section.remove[index]
                    del section[index]
            

        if(len(section) != 0):
            answer += 1
            for i in range(end-m+1, end+1): # 예외처리 해줘야 할듯
                if(1<i<100000):
                    index = binary_search(i, section)

                    if(i>n):
                        index = -1

                    if(index !=-1):
                        # section.remove[index]
                        del section[index]
    
    return answer

print(solution(19, 4, [2,5,8,12,15]))
