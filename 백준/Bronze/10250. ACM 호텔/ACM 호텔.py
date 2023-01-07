repeat = int(input())

for i in range(repeat):
    H, W, customer = map(int, input().split())
    first, last = 0, 0

    if(1<=customer<=W*H and 1<=H<=99 and 1<=W<=99):
        # first += 1
        first = customer % H # 층
        last = int(customer / H + 1) # 호수

        if(first == 0):
            first = H # 정확하게 맞아 떨어질 때는 0이 되는데, 그때는 최대 값이므로 H 값으로 설정해준다.
            last = last -1 # 위와 같이 정확하게 맞아 떨어질 때는 다음 방으로 넘어가는 것이 아닌 해당 층의 끝방이므로 +1을 해주면 안 된다.

        # print("{:02d}".format(first), end="")
        print(first, end="")
        print("{:02d}".format(last))
