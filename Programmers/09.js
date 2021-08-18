// 미해결

function solution(numbers, target) {
    var answer = 0;
    let ch = Array.from({length:numbers.length}, ()=>0); 

    function DFS(v, s, sum){
        if(v === numbers.length){
            if(sum === target)
                answer++; 
            return; 
        }else{
            for(let i = s; i<numbers.length; i++){
                if(ch[i] === 0){
                    ch[i] = 1; 
                    sum += numbers[i]; 
                    DFS(v+1, i, sum); 
                    sum -= numbers[i]; 
                    ch[i] = 0; 
                }
            }
        }
    }
    ch[0] = 1; 
    DFS(0, 0, numbers[0]); 
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3))