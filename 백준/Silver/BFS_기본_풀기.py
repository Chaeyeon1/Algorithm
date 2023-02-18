from collections import deque
N, line, s = list(map(int, input().split()))

arr = [[0 for _ in range(N)] for _ in range(N)]

for i in range(line):
    x, y = map(int, input().split())
    arr[x-1][y-1] = 1
    arr[y-1][x-1] = 1

def bfs(start):
    deq = deque()
    visited = [0 for i in range(N)]
    visited[start-1] = 1
    deq.append(start-1)
    while len(deq)!=0:
        current = deq.popleft()
        print(current+1, end=' ')

        for i in range(N):
            if(arr[current][i]==1 and visited[i]==0):
                visited[i] = 1
                deq.append(i)
                

bfs(s)