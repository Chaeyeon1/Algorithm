import sys

inputWord = []
N, M = map(int, input().split())

arr = []

for i in range(8):
    arr.append([])

    for j in range(8):
        if(i%2==0):
            if(j%2==0):
                arr[i].append('W')
            else:
                arr[i].append("B")
        else:
            if(j%2==0):
                arr[i].append("B")
            else:
                arr[i].append("W")   

# for i in range(8):         
#     print(arr[i])

# N이 행이고 M이 열이다.


for i in range(N):
    inputWord.append([])
    for j in sys.stdin.readline().rstrip():
        inputWord[i].append(j)

# for i in range(N):
#     print(inputWord[i])

count = []
countNum1 = 0
countNum2 = 0
for y in range(N-7): # 행 돌아감 
    for x in range(M-7): # 열 돌아감 13-7 => 6번
        for i in range(0+y, 8+y):
            for j in range(0+x, 8+x): # range(0, 8) 이면 0,1,2,3,4,5,6,7
                if(i<0): i=0
                if(j<0): j=0
                if(inputWord[i][j] != arr[i-y][j-x]):
                    countNum1 += 1
                if(inputWord[i][j] == arr[i-y][j-x]):
                    countNum2 += 1
        count.append(countNum1)
        count.append(countNum2)
        countNum1 = 0
        countNum2 = 0

        # print(str(y)+','+str(x))


# print(count)
print(min(count))