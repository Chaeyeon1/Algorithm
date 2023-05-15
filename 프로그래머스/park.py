park = ["SOO","OOO","OOO"]
routes = ["E 2","S 2","W 1"]

def solution(park, routes):
    answer = []
    s_location = []
    width_length = len(park[0])
    height_length = len(park)
    
    def S_wall(distance):
        for i in range(distance):
            if(park[y+1+i][x:x+1] == "X"): 
                return False 
        return True 
            
    def N_wall(distance):
        for i in range(distance): 
            if(park[x-1-i][x:x+1] == "X"): 
                return False 
            else: 
                return True 
    
    for i in range(len(park)):
        if(park[i].find("S")!= -1):
            s_location.append(park[i].find("S"))
            s_location.append(i)
            break
    x = s_location[0]
    y = s_location[1]
        
    for route in routes:
        i = route.split()
        
        
#       s_location = (0, 1)
#       direction = E
#       distance = 4

        direction = i[0]
        distance = int(i[1])
        
        print("x, y" , x, y)
        print("distance", distance)
        print("direction", direction)
        
        # print("park",)
        
        if(direction == "E" and (x + distance)<width_length and  park[0][x:x+distance].find("X") == -1 ):
            x += distance
        elif(direction == "W" and (x - distance)>=0 and  park[0][x:x-distance].find("X") == -1):
            x -= distance
        elif(direction == "N" and (y - distance) >= 0 and N_wall(distance)):
            y -= distance
        elif(direction == "S" and (y + distance) < height_length and S_wall(distance)):
            y += distance   


        
    return [y, x]


print(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"])) # [2,1]
print(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])) # [0,0]

print(solution(["OSO","OOO","OOO","OOO"], ["W 2"])) # [0,1]
print(solution(["OSO","OOO","OOO","OOO"], ["N 2"])) # [0,1]
print(solution(["OSO","OOO","OOO","OOO"], ["S 5"])) # [0,1]
print(solution(["OSO","OOO","OOO","OOO"], ["E 5"])) # [0,1]

print(solution(["XXX","XSX","XXX"], ["E 1"])) # [1,1]   
print(solution(["XXX","XSX","XXX"], ["W 1"])) # [1,1]
print(solution(["XXX","XSX","XXX"], ["S 1"])) # [1,1]
print(solution(["XXX","XSX","XXX"], ["N 1"])) # [1,1]

print(solution(["SOXOO","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["E 3"])) # [0, 0]
print(solution(["SOOOX","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["E 3"])) # [0, 3]
print(solution(["XOOOS","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["W 3"])) # [0, 1]
print(solution(["OOXOS","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["W 3"])) # [0, 4]
print(solution(["SOOOO","OOOOO","XOOOO", "OOOOO", "OOOOO"], ["S 3"])) 
print(solution(["SOOOO","OOOOO","OOOOO", "OOOOO", "XOOOO"], ["S 3"])) 
print(solution(["OOOOO","OOOOO","XOOOO", "OOOOO", "SOOOO"], ["N 3"])) 
print(solution(["XOOOO","OOOOO","OOOOO", "OOOOO", "SOOOO"], ["N 3"]))