function solution(today, terms, privacies) {
    let answer = [];
    let data = {};
    
    for(let i = 0; i< terms.length; i++){
        let arr = terms[i].split(" ")
        data[arr[0]] = parseInt(arr[1])
    }
    
    for(let i=0; i<privacies.length; i++) {
        let privacy = privacies[i].split(" ");
        let alphabet = privacy[1]
        let date = privacy[0].split(".")
        
        let year = parseInt(date[0])
        let month = parseInt(date[1])
        
        // 30개월 // 5     // 25
        month = month + data[alphabet]
        
        // 2020년 6월 8일 -> 18개월 -> 2020년 24월 8일 -> 202
    
        if(month > 12){
            year += parseInt(month / 12)
            month = month % 12 
            
            if (month === 0) {
                year -= 1
                month = 12
            }
        }
        
        today = today.replace(/\./g, "-")
        
        let newDate = year + "-" + month + "-" + parseInt(date[2])

       if(new Date(today) >= new Date(newDate)) { 
           answer.push(i+1)
       }
    }
    
    return answer;
}