from collections import deque

deque = deque()

N = int(input())
for i in range(N):
    deque.append(i+1)

while (len(deque)>1):
    deque.popleft()
    rightMove = deque.popleft()
    deque.append(rightMove)

print(deque[0])