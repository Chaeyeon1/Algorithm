from collections import deque

N, M, V = map(int, input().split())

graph = [[False] * (N + 1) for _ in range(N + 1)]

for _ in range(M):
    a, b = map(int, input().split())
    graph[a][b] = True
    graph[b][a] = True


visited1 = [False] * (N + 1)  # dfs의 방문기록

def dfs(V):
    visited1[V] = True  # 해당 V값 방문처리
    print(V, end=" ")
    for i in range(1, N + 1):
        if not visited1[i] and graph[V][i]:  # 만약 i값을 방문하지 않았고 V와 연결이 되어 있다면
            dfs(i)  # 해당 i 값으로 dfs를 돈다.(더 깊이 탐색)

dfs(V)