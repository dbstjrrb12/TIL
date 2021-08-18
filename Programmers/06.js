function solution(s) {
    var answer = 0;
    let str = ""
    let board = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    let map = new Map(); 

    for(let i in board){
        map.set(board[i], i); 
    }

    for(let i=0; i<s.length; i++){
        if(Number.isInteger(+s[i])){
            str += s[i]; 
        }else{
            for(let j=3; j<=5; j++){
                let tmp = s.substring(i, i+j); 
                if(map.has(tmp)){
                    str += String(map.get(tmp)); 
                    i += j-1; 
                    break;
                }
            }
        }
    }
    answer = Number(str); 
    return answer;
}

console.log(solution("one4seveneightzero"))