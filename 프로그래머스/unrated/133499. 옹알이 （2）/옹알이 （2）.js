// function solution(babbling) {
//     var answer = 0;
//     let arr = {}
//     let word = ""
//     let previousWord = ""

//     arr = {
//         "aya": 0,
//         "ye": 1,
//         "woo": 2,
//         "ma": 3
//     }
    
//     // ayaye , uuu , yeye, yemawoo , ayaayaa

    
//     for(let i = 0; i<babbling.length; i++) {
//         for (let j = 0; j<babbling[i].length; j++) {
//             if(arr[word]>=0) {
//                 previousWord = word
//                 word = babbling[i][j]
//             } else {
//                 word += babbling[i][j]
//             }
//         }
//         if((arr[word]>=0) && (previousWord !== word)) {
//             answer += 1
//         }
//         word = ""
//     }
    
//     return answer;
// }

function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"]
    let answer = 0;

    // 주어진 단어를 하나씩 테스트 해봅니다.
    babbling.map(babyword => {
        let progress = true;
        let before = "";

        while (progress) {
            for (let i = 0; i < words.length; i++) {
                // 단어의 맨 앞이 머쓱이가 읽을 수 있는 부분인가?
                if (babyword.indexOf(words[i]) == 0) {
                    // 읽을 수 있더라도 연속하지는 않는가?
                    if (before != words[i]) {
                        before = words[i]
                        babyword = babyword.slice(words[i].length)
                        break;
                    } else {
                        progress = false;
                        break;
                    }
                } else {
                    if (i == words.length - 1) {
                        progress = false;
                        break;
                    }
                }
            }
            // 한 차례 판별이 끝난 후, 끝까지 다 읽었다면 발음 가능한 단어의 수(answer) + 1
            if (babyword.length == 0) {
                answer++;
                progress = false;
            }
        }
    })
    return answer;
}