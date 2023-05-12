def solution(name, yearning, photo):
    answer = []
    dic = {}
    count = 0
    result = []
    
    for i in range(len(yearning)):
        dic[name[i]] = yearning[i]
    
    for i in range(len(photo)):
        for person in photo[i]:
            if(person in name):
                count += dic[person]
        result.append(count)
        count = 0
        
    return result