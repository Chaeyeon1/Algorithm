function solution(arr1, arr2) {
    arr1.map((row, i) => {
        row.map((column, index) => {
            arr1[i][index] += arr2[i][index]
        })
    })
    
    return arr1;
}