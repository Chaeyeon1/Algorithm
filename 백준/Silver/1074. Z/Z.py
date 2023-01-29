N, r, c = map(int, input().split())
result = 0
while(N != 0):
    if((r < (2**(N-1)) and ( c < (2**(N-1))))):
        # 만약, 1사분면이라면
        result += 0 * (2**(N-1)) * (2**(N-1))

    elif((r < (2**(N-1)) and (c >= (2**(N-1))))): # 2사분면
        result += 1 * (2**(N-1)) * (2**(N-1))
        c -= 2**(N-1)

    elif((r >= (2**(N-1)) and (c < (2**(N-1))))): # 3사분면
        result += 2 * (2**(N-1)) * (2**(N-1))
        r -= 2**(N-1)

    else:   # 4사분면
        result += 3 * (2**(N-1)) * (2**(N-1))
        r -= 2**(N-1)
        c -= 2**(N-1)

    N -= 1

print(result)