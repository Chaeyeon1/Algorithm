from collections import deque

N = int(input())
width, height, bae_count = map(int, input().split())

arr = [[0 for _ in range(width)] for _ in range(height)]
visited = [[0 for _ in range(width)] for _ in range(height)]

count = 0
for i in range(bae_count):
    w, h = map(int, input().split())

    arr[h][w] = 1

print(arr)
# deq.append((1,3))

# print(deq.pop()[0])

def bfs(x, y):
    global visited, count
    deq = deque()

    if(arr[x][y] == 1 and visited[x][y]==0):
        visited[x][y] = 1
        # print(visited)
        deq.append((x, y))
        while len(deq)!=0:
            current = deq.popleft()
            # print(current, end=' ')

            # for i in range(N):
            for i in ((current[0]+1, current[1]), (current[0], current[1]-1), (current[0]-1, current[1]), (current[0], current[1]+1)):
                if(i[0]>=0 and i[1]>=0 and i[0]<height and i[1] < width):
                    if(arr[i[0]][i[1]]==1 and visited[i[0]][i[1]]==0):
                        visited[i[0]][i[1]] = 1
                        deq.append((i[0], i[1]))

        count += 1

for y in range(height):
    for x in range(width):
        bfs(y, x)

print(count)