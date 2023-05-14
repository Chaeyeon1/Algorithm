def solution(s, skip, index):
    answer = ""
    number = 0
    
    for i in s:
        number = ord(i)
        j = 0
        while(j < index):
            number += 1
            if chr(number) > 'z':
                number = ord('a')
            if chr(number) in skip:
                print(chr(number))
            else :
                j += 1
        
        answer += chr(number)
    return answer