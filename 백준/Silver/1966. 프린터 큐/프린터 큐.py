import sys

num = int(input()) # 테스트 케이스 몇 번 돌릴 것인지

for i in range(num):
    queue_degree = []
    printed = 0 # 이거는 몇 번째로 인쇄되는지


    N, M = map(int,input().split()) # 몇 개 입력할 건지, 출력할 숫자
    queue_list = list(map(int, sys.stdin.readline().split())) # 몇 개 입력할 건지에 따른 리스트 / [1, 2, 3, 4]

    for i in range(len(queue_list)):
        queue_degree.append([i, queue_list[i]]) # [[0, 1], [1, 2], [2, 3], [3, 4]]

    while(1):
        if (queue_degree[0][1] == max(queue_list)):
            printed += 1
            # print(queue_list[0])
            if (queue_degree[0][0]==M):
                print(printed)
                break

            else:
                queue_list.pop(0)
                queue_degree.pop(0)

        else:
            queue_list.append(queue_list.pop(0))
            queue_degree.append(queue_degree.pop(0))