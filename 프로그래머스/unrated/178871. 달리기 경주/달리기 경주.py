def solution(players, callings):
    answer = []
    answer = players[:]
    
    for i in range(len(callings)):
        currentCallingIndex = answer.index(callings[i])
        previousCallingIndex = currentCallingIndex - 1

        # 서로 변경해줌
        temp = answer[previousCallingIndex]
        answer[previousCallingIndex] = answer[currentCallingIndex]
        answer[currentCallingIndex] = temp
    
    return answer