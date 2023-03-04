from collections import deque

width, height = map(int, input().split())
# arr = [[0 for _ in range(width)] for _ in range(height)]
arr = [list(map(int, input().split())) for _ in range(height)]
visited = [[0 for _ in range(width+1)] for _ in range(height+1)]
date = 0
lst = []

def bfs(lst):
    global visited, date
    deq = deque()

    for x, y in lst:
        if(arr[x][y] == 1 and visited[x][y] == 0):
            visited[x][y] = 1
            deq.append((x, y, 0))

    if(len(deq)==0):
        return 
    
    while len(deq)!=0:
        x_queue, y_queue, second = deq.popleft()
        for tomato_x, tomato_y in ((x_queue+1, y_queue), (x_queue, y_queue-1), (x_queue-1, y_queue), (x_queue, y_queue+1)):    
            if(0 <= tomato_x<height and 0 <= tomato_y < width):
                if(arr[tomato_x][tomato_y]==0 and visited[tomato_x][tomato_y]==0):
                    visited[tomato_x][tomato_y] = 1
                    arr[tomato_x][tomato_y] = 1
                    deq.append((tomato_x, tomato_y, second+1))
                    date = second + 1

for y in range(height):
    for x in range(width):
        if(arr[y][x] == 1):
            lst.append((y, x))

bfs(lst)
if all(0 not in l for l in arr):
    print(date)

else:
    print(-1)