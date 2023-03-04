# from collections import deque
# N, line, s = list(map(int, input().split()))

# arr = [[0 for _ in range(N+1)] for _ in range(N+1)]

# for i in range(line):
#     x, y = map(int, input().split())
#     arr[x][y] = 1
#     arr[y][x] = 1

# def bfs(start):
#     deq = deque()
#     visited = [0 for i in range(N+1)]
#     visited[start] = 1
#     deq.append(start)
#     while len(deq)!=0:
#         current = deq.popleft()
#         print(current, end=' ')

#         for i in range(1, N+1):
#             if(arr[current][i]==1 and visited[i]==0):
#                 visited[i] = 1
#                 deq.append(i)

# bfs(s)

from collections import deque
N, line, s = list(map(int, input().split()))

arr = [[0 for _ in range(N+1)] for _ in range(N+1)]

for i in range(line):
    x, y = map(int, input().split())
    arr[x][y] = 1
    arr[y][x] = 1

def bfs(s):
    deq = deque()
    
    visited = [0 for _ in range(N+1)]
    visited[s] = 1

    deq.append(s)

    while(len(deq) != 0):
        current = deq.popleft()
        print(current, end=' ')

        for i in range(1, N+1):
            if(arr[current][i]==1 and visited[i]==0):
                visited[i] = 1
                deq.append(i)

bfs(s)


# from collections import deque
# N, line, s = list(map(int, input().split()))

# arr = [[0 for _ in range(N+1)] for _ in range(N+1)]

# for i in range(line):
#     x, y = map(int, input().split())
#     arr[x][y] = 1
#     arr[y][x] = 1

# def bfs(s):
#     deq = deque()
#     deq.append(s)
#     visited = [0 for _ in range(N+1)]
#     visited[s] = 1

#     while len(deq) > 0:
#         current = deq.popleft()
#         print(current, end='')

#         for i in range(1, N+1):
#             if(visited[i]==0 and arr[current][i] == 1):
#                 visited[i] = 1
#                 deq.append(s)


# bfs(s)