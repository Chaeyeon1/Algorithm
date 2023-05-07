from collections import deque

dq = deque()

total, _ = list(map(int, input().split()))
delNums = list(map(int, input().split()))

count = 0

for num in range(1, total+1):
    dq.append(num)


for delNum in delNums:
    if(dq.index(delNum)<=(total/2)):
        for i in range(dq.index(delNum)):
            first = dq.popleft()
            dq.append(first)
            count += 1

    else :
        for i in range(total-dq.index(delNum)):
            last = dq.pop()
            dq.appendleft(last)
            count += 1
    
    popNum = dq.popleft()
    total -= 1

print(count)