def solution(wallpaper):
    # answer = [len(wallpaper[0]), len(wallpaper[0]), 0, 0]
    answer = [50, 50, 0, 0]
    arr = []
    
    for i, item in enumerate(wallpaper):
        for j,file in enumerate(item):
            if(file == "#"):
                if(i<answer[0]):
                    answer[0] = i
                if(i>answer[2] ):
                    answer[2] = i 
                if(j<answer[1] ):
                    answer[1] = j
                if(j>answer[3] ):
                    answer[3] = j 
    
    answer[2] += 1
    answer[3] += 1
    return answer