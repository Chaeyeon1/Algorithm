def solution(park, routes):
    answer = []
    s_location = []
    width_length = len(park[0])
    height_length = len(park)
    
    def S_wall(distance):
        for i in range(distance+1):
            if(park[y+i][x] == "X"): 
                return False 
        return True 
            
    def N_wall(distance):
        for i in range(distance+1): 
            if(park[y-i][x] == "X"): 
                return False 
        return True 
    def E_wall(distance):
        for i in range(distance+1): 
            if(park[y][x+i] == "X"): 
                return False 
        return True 
    def W_wall(distance):
        for i in range(distance+1): 
            if(park[y][x-i] == "X"): 
                return False 
        return True 
    
    for i in range(len(park)):
        if(park[i].find("S")!= -1):
            x = park[i].find("S")
            y = i
            break
        
    for route in routes:
        i = route.split()
        
        direction = i[0]
        distance = int(i[1])
        
        if(direction == "E" and (x + distance) < width_length and E_wall(distance)):
            x += distance
        elif(direction == "W" and (x - distance) >= 0 and W_wall(distance)):
            x -= distance
        elif(direction == "N" and (y - distance) >= 0 and N_wall(distance)):
            y -= distance
        elif(direction == "S" and (y + distance) < height_length and S_wall(distance)):
            y += distance   
    
    return [y, x] 
