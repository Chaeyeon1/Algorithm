from collections import deque
import sys

num = int(input())

dq = deque()

for i in range(num):
    X = list(sys.stdin.readline().split())

    if(X[0] == "push_front"):
        dq.appendleft(X[1])

    elif(X[0] == "push_back"):
        dq.append(X[1])

    elif(X[0] == "pop_front"):
        if(len(dq)==0):
            print("-1")
        else:
            print(dq.popleft())

    elif(X[0] == "pop_back"):
        if(len(dq)==0):
            print("-1")
        else:
            print(dq.pop())

    elif(X[0] == "size"):
        print(len(dq))

    elif(X[0] == "empty"):
        if(len(dq)==0):
            print("1")
        else:
            print("0")

    elif(X[0] == "front"):
        if(len(dq)==0):
            print("-1")
        else:
            print(dq[0])

    elif(X[0] == "back"):
        if(len(dq)==0):
            print("-1")
        else:
            print(dq[-1])