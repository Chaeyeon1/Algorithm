def solution(cards1, cards2, goal):
    answer = ''
    
    card1_index = 0
    card2_index = 0
    
    for i in goal:
        if(card1_index<len(cards1) and cards1[card1_index] == i ):     
            card1_index += 1
        elif(card2_index<len(cards2) and cards2[card2_index] == i ):
            card2_index+= 1
        else:
            answer = "No"
            break
        answer="Yes"
    
    return answer