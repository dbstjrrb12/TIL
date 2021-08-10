// 2624 동전 바꿔주기 
// 유한 냅색 알고리즘 

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e)=>{
    if(e.includes(' ')) return e.split(' '); 
    else return e; 
});

t = input[0]; 
coins = input.slice(2,input.length); 
console.log(solution(t, coins)); 

function solution(t, coins){

    let dy = Array.from({length:t+1}, ()=>0); 
    let answet; 

    dy[0] = 1; 

    for(let [p, n] of coins){
        for(let j=t; j>=1; j--){
            for(let k=1; k<=n; k++){
                if(j-p*k < 0) break; 
                dy[j] += dy[j-p*k]; 
            }
        }
    }
    
    return dy[t]; 
}

