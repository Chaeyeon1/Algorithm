from collections import deque
N, line, s = list(map(int, input().split()))

arr = [[0 for _ in range(N+1)] for _ in range(N+1)]

for i in range(line):
    x, y = map(int, input().split())
    arr[x][y] = 1
    arr[y][x] = 1

def bfs(start):
    deq = deque()
    visited = [0 for i in range(N+1)]
    visited[start] = 1
    deq.append(start)
    while len(deq)!=0:
        current = deq.popleft()
        print(current, end=' ')

        for i in range(1, N+1):
            if(arr[current][i]==1 and visited[i]==0):
                visited[i] = 1
                deq.append(i)

visited1 = [False] * (N+1)  # dfs의 방문기록

def dfs(start):
    visited1[start] = 1 
    print(start, end=" ")
    for i in range(1, N+1):
        if visited1[i]==0 and arr[start][i]==1:  
            dfs(i)  


dfs(s)
print()
bfs(s)