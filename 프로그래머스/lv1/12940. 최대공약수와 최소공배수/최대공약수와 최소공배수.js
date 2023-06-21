function solution(n, m) {
    var answer = [];
    
    let GCB = (n, m) => n%m ? GCB(m, n%m) : m
   
          
    return [GCB(n, m),  n * m / GCB(n,m)];
}