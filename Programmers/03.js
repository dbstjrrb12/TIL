// 복권 순위 정하기 문제 

function solution(lottos, win_nums) {
    var answer = [];
    let score = [6,5,4,3,2]; 
    let count = 0; 
    let zero = 0; 
    let size = 0; 
    
    let map = new Map(); 
    for(let x of lottos){
        map.set(x, map.get(x)+1 || 1); 
    }
    
    zero = map.get(0) === undefined ? 0 : map.get(0); 
    size = map.size; 
    
    for(let x of win_nums){
        if(map.get(x)) map.delete(x); 
    }
     
    count = size - map.size; 
    
    if(score.indexOf(count+zero)+1) answer.push(score.indexOf(count+zero) + 1);
    else answer.push(6); 
    
    if(score.indexOf(count)+1) answer.push(score.indexOf(count)+1); 
    else answer.push(6); 
    
    return answer;
}

console.log(solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35])); 