N = int(input())

lst = set(list(map(int, input().split())))

M = int(input())

num_list = list(map(int, input().split()))

for num in num_list:
    if num in lst:
        print("1")
    else:
        print("0")