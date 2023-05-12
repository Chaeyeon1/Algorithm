def solution(players, callings):
    answer = players
    
    dic = {player: i+1 for i,player in enumerate(players) }
    
    for call in callings:
        # kai를 부름 -> 4 -> 3
        dic[call] = dic[call] - 1

        # "poe"
        loser = answer[dic[call]-1]

        # "poe의 등수"
        dic[loser] = dic[loser] + 1

        # temp에서 poe와 kai의 자리를 바꿈
        # 2번 인덱스, 3번 인덱스
        answer[dic[call]-1], answer[dic[call]] = answer[dic[call]], answer[dic[call]-1]
    
    
    return answer