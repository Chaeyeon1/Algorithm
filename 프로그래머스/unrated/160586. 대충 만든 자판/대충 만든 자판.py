def solution(keymap, targets):
    answer = []
    arr = {}
    count = 0
    
    for i, key in enumerate(keymap):
        for j, keyName in enumerate(key):
            if keyName in arr:
                arr[keyName] = min(arr[keyName], j)
            else: arr[keyName] = j
    
    for i in targets:
        count = 0
        for target in i:
            if target in arr:
                print(arr[target])
                count += arr[target] + 1
            else: 
                count = 0 
                break
                
        if(count == 0):
            answer.append(-1)
        else: answer.append(count) 
        
    return answer