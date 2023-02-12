N = int(input())

input_tuple = [tuple(int(x) for x in input().split()) for _ in range(N)]

input_tuple = sorted(input_tuple, key=lambda x: x[1])

count = 0
last_time = 0

for i in range(N): 
    if(last_time <= input_tuple[i][0]): # 
        count +=1
    
        last_time = input_tuple[i][1]

print(count)