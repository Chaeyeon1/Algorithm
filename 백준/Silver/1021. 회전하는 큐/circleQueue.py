from collections import deque

dq = deque()

# 전체 개수 입력 받기
total, _ = list(map(int, input().split()))

# 삭제할 숫자 배열 입력 받기
delNums = list(map(int, input().split()))

count = 0

# deque에 총 숫자들 집어넣음
for num in range(1, total+1):
    dq.append(num)


# 삭제할 숫자들을 반복문 돌림
for delNum in delNums:
    # 만약, 앞의 숫자가 더 적게 남았다면?
    if(dq.index(delNum)<=(total/2)):
        # 삭제할 숫자 인덱스의 개수만큼 앞에서 빼고, 뒤에 붙임 (+카운트도 1 올림)
        for i in range(dq.index(delNum)):
            first = dq.popleft()
            dq.append(first)
            count += 1

    # 만약, 뒤의 숫자가 더 적게 남았다면?
    else :
        # 삭제할 숫자 인덱스의 개수만큼 뒤에서 빼고, 앞에 붙임 (+카운트도 1 올림)
        for i in range(total-dq.index(delNum)):
            last = dq.pop()
            dq.appendleft(last)
            count += 1
    
    # 내가 빼야하는 숫자가 맨 앞에 왔으니, 빼줌(이 작업은 카운트에 세지 않음)
    popNum = dq.popleft()

    # 내가 원하는 숫자를 옮기는 것이 아닌 빼줬기 때문에 total 값에서 빼주어야 함
    total -= 1

print(count)