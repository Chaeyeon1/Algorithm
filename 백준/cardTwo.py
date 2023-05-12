import math

N = int(input())

i = 1
for i in range(N):
    if i * 2 < N:
        i = i * 2

print(i)