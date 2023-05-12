import math

N = int(input())
arr = [i+1 for i in range(N)]

while(len(arr)>1):
    index = math.ceil(len(arr)/2)
    for i in range(int(index)):
        del arr[i]

print(arr[0])