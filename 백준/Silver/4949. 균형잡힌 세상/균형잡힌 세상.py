while True :
    a = input()
    stack_list = []

    if a == "." :
        break

    for i in a :
        if i == '[' or i == '(' :
            stack_list.append(i)
        elif i == ']' :
            if len(stack_list) != 0 and stack_list[-1] == '[' :
                stack_list.pop() # 맞으면 지워서 stack을 비워줌 0 = yes
            else : 
                stack_list.append(']')
                break
        elif i == ')' :
            if len(stack_list) != 0 and stack_list[-1] == '(' :
                stack_list.pop()
            else :
                stack_list.append(')')
                break
    if len(stack_list) == 0 :
        print('yes')
    else :
        print('no')