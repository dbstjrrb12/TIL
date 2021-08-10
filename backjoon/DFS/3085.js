// 3085 사탕 게임 
// 완전 탐색으로 풀어야 하는 문제 

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e)=>{
    if(Number(e)){
        return Number(e); 
    }else{
        return e.split(''); 
    }
});

let candy = input.splice(1, input.length-1); 
let len = candy.length; 
let answer = 0; 

let dx = [-1,0,1,0]; 
let dy = [0,1,0,-1]; 

if(count(candy) === len){
    answer = len; 
    return answer; 
}

for(let i=0; i<len; i++){
    for(let j=0; j<len; j++){
        for(let k=0; k<4; k++){
            let x = i + dx[k]; 
            let y = j + dy[k]; 
            
            if(x>=0 && x < len && y>=0 && y < len && candy[x][y] !== candy[i][j]){
                let copied = candy.slice(); 
    
                let tmp = copied[i][j]; 
                copied[i][j] = copied[x][y]; 
                copied[x][y] = tmp; 

                answer = Math.max(answer, count(tmp, i, j));
                answer = Math.max(answer, count(tmp, x, y)); 
            }
        }
    }
}

console.log(answer); 

function count(copied, row, col){
     
    let len = copied.length; 
    let size = 0; 
    
    let map1 = new Map(); 
    for(let k = 0; k<len; k++){
        map1.set(copied[row][k], map1.get(copied[row][k])+1 || 1); 
    }

    let map2 = new Map(); 
    for(let k=0; k<len; k++){
        map2.set(copied[k][col], map2.get(copied[k][col])+1 || 1); 
    }

    console.log(map1)
    console.log(map2)
    

    return num; 
}