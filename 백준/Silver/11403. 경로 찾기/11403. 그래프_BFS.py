from collections import deque
N = int(input())


arr=[list(map(int,input().split())) for _ in range(N)]


def bfs(start,end):
    visited = [0 for i in range(N)]
    deq = deque()
    deq.append(start)
    while len(deq)!=0:
        current = deq.popleft()

        for i in range(N):
            if(arr[current][i]==1 and visited[i]==0):
                if(i == end):
                    print(1, end=" ")
                    return
                visited[i] = 1
                deq.append(i)
    print(0, end=" ")


for i in range(N):
    for j in range(N):
        bfs(i, j)
        
    print()
