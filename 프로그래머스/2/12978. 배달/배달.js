function solution(N, road, K) {
    // 그래프 생성
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [start, end, dist] of road) {
        graph[start].push([end, dist]);
        graph[end].push([start, dist]);
    }
    
    // 다익스트라 알고리즘을 사용하여 각 마을까지의 최단 거리 계산
    const distances = Array(N + 1).fill(Infinity);
    const pq = [[1, 0]]; // 우선순위 큐 초기화: [마을 번호, 거리]
    distances[1] = 0;
    
    while (pq.length) {
        const [current, currentDist] = pq.shift();
        
        // 현재 마을에서 갈 수 있는 다음 마을들을 탐색
        for (const [next, nextDist] of graph[current]) {
            const newDist = currentDist + nextDist;
            
            // 새로운 거리가 기존의 최단 거리보다 작을 경우 갱신하고 우선순위 큐에 추가
            if (newDist < distances[next]) {
                distances[next] = newDist;
                pq.push([next, newDist]);
            }
        }
        
        // 우선순위 큐 재정렬
        pq.sort((a, b) => a[1] - b[1]);
    }
    
    // 배달 가능한 마을 수 계산
    return distances.filter(dist => dist <= K).length;
}