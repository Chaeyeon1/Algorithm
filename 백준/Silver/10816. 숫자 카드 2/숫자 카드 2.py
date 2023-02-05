N = int(input())
dic = {}

n = list(map(int, input().split()))
for i in n:
    if i not in dic:
        dic[i] = 1
    else:
        dic[i] += 1
        
M = int(input())
n = list(map(int, input().split()))

for i in n:
    if i in dic:
        print(dic[i], end=' ')
    else:
        print("0", end=' ')