function solution(sizes) {
    var answer = 0;
    let new_sizes = []
    let max_width = 0
    let max_height = 0
    
    for (i=0; i<sizes.length; i++) {
        let current_max_width = Math.max(...sizes[i])
        let current_max_height = Math.min(...sizes[i])
        
        if(max_width< current_max_width) {
            max_width = current_max_width
        }
        
        if(max_height< current_max_height) {
            max_height = current_max_height
        }
        
    }
    
    return max_width * max_height;
}