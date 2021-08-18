function solution(board, moves){
    let answer = 0 ; 
    let stack = [];

    for(let mv of moves){
        for(let doll of board){
            if(doll[mv-1] !== 0) {
                if(stack.length !== 0){
                    let tmp = stack.pop();
                    if(tmp === doll[mv-1]){
                        doll[mv-1] = 0; 
                        answer++;  
                    }else{
                        stack.push(tmp); 
                        stack.push(doll[mv-1]); 
                        doll[mv-1] = 0
                    }
                }else{
                    stack.push(doll[mv-1]); 
                    doll[mv-1] = 0; 
                }
                break;    
            }
        }
    }

    answer *= 2; 
    return answer; 
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))
