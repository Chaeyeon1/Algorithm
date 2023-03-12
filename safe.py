from collections import deque

N = int(input())

arr = [list(map(int, input().split())) for _ in range(N)]
count = 0
count_list = []


def bfs(x, y, h):
    global count
    deq = deque()

    if(visited[x][y]==0 and arr[x][y]>h):
        visited[x][y] = 1
        deq.append((x, y))
        count += 1

    while(len(deq) != 0):
        queue_x, queue_y = deq.popleft()

        for bfs_x, bfs_y in ((queue_x+1, queue_y), (queue_x, queue_y+1), (queue_x-1, queue_y), (queue_x, queue_y-1)): 
            if(0<=bfs_x<N and 0<=bfs_y<N and  arr[bfs_x][bfs_y] > h and visited[bfs_x][bfs_y]==0):
                visited[bfs_x][bfs_y] = 1
                deq.append((bfs_x,bfs_y))


for h in range(max(map(max, arr))+1):
    visited = [[0 for _ in range(N)] for _ in range(N)]
    for i in range(N):
        for j in range(N):
            bfs(i,j,h)
    count_list.append(count)
    count = 0




print(max(count_list))
