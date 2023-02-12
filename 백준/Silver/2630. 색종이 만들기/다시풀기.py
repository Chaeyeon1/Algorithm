def color(x, y, n):
    global white, blue
    first = lst[x][y]

    for i in range(x, x+n):
        for j in range(y, y+n):
            if(first != lst[i][j]):
                color(x, y, n//2)
                color(x, y+n//2, n//2)
                color(x+n//2, y, n//2)
                color(x+n//2, y+n//2, n//2)
                return # 맞지 않으면 끝나야 함

    if(first == 1):
        blue+=1
        return 
    else:
        white+=1
        return


N = int(input())

lst = [list(map(int, input().split())) for _ in range(N)]

white, blue = 0, 0

color(0, 0, N)

print(white)
print(blue)
