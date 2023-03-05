from collections import deque

N = int(input())
arr = [list(map(int, input())) for _ in range(N)]
visited = [[0 for _ in range(N+1)] for _ in range(N+1)]
count = 0
answer = []

def bfs(x, y):
    global visited, count
    deq = deque()

    if(arr[x][y] == 1 and visited[x][y] == 0):
        visited[x][y] = 1
        deq.append((x, y))

    if(len(deq)==0):
        return 
    
    while len(deq)!=0:
        x_queue, y_queue = deq.popleft()
        count+=1
        for tomato_x, tomato_y in ((x_queue+1, y_queue), (x_queue, y_queue-1), (x_queue-1, y_queue), (x_queue, y_queue+1)):    
            if(0 <= tomato_x<N and 0 <= tomato_y < N):
                if(arr[tomato_x][tomato_y]==0 and visited[tomato_x][tomato_y]==0):
                    visited[tomato_x][tomato_y] = 1
                    arr[tomato_x][tomato_y] = 1
                    deq.append((tomato_x, tomato_y))

for y in range(N):
    for x in range(N):
        if(arr[y][x] == 1 and visited[y][x] ==0):
            bfs(y, x)
            answer.append(count)
            count = 0

answer = sorted(answer)

for i in answer:
    print(i)