def solution(s, skip, index):
    answer = ""
    
    for i in s:
        number = ord(i)
        j = 0
        while(j < index):
            number += 1
            if chr(number) > 'z':
                number = ord('a')
            if chr(number) not in skip:
                j += 1
        
        answer += chr(number)
    
    return answer
