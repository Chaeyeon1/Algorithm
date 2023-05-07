# def solution(players, callings):
#     answer = []
#     answer = players[:]
    
#     for i in range(len(callings)):
#         currentCallingIndex = answer.index(callings[i])
#         previousCallingIndex = currentCallingIndex - 1

#         # 서로 변경해줌
#         temp = answer[previousCallingIndex]
#         answer[previousCallingIndex] = answer[currentCallingIndex]
#         answer[currentCallingIndex] = temp
    
#     return answer

def solution(players, callings):
    answer = {player: i for i, player in enumerate(players)}
    
    for call in callings:
        currentIdx = answer[call]
        answer[call] -= 1
        answer[players[currentIdx - 1]] += 1
        
        players[currentIdx - 1], players[currentIdx] = players[currentIdx], players[currentIdx - 1]
    
    return players