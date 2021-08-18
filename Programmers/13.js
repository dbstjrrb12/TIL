// 실패율 

function solution(N, stages) {
    var answer = [];
    let fail = Array.from({length : N}, ()=>0); 
    let len = stages.length; 
    let non_c = 0; 
    let clear = 0;
    let map = new Map(); 
    
    
    stages.sort((a,b)=>a-b); 
    
    for(let i=1; i<=N; i++){
        for(let j=0; j<len; j++){
            if(stages[j] === i) non_c++; 
            if(stages[j] >= i) clear++;  
        }
        fail[i-1] = non_c/clear; 
        non_c = 0; 
        clear = 0;
    }
    
    for(let i =1; i<=N; i++){
        fail[i-1] = {
            key : i,
            val : fail[i-1]
        }
    }

    fail.sort((a,b)=>b.val - a.val); 
    answer = fail.map((e)=>e.key); 
    
    return answer;
}

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));