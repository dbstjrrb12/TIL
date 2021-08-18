function solution(progresses, speeds) {
    var answer = [];
    let left = []; 
    let stack = []; 

    let count = 1; 
    let flag = false; 
    
    for(let i in progresses){
        left.push(Math.ceil((100-progresses[i])/speeds[i])); 
    }

    let min = Number.MIN_SAFE_INTEGER; 

    for(let i=0; i<left.length; i++){
        if(stack.length === 0){
            stack.push(left[i]); 
        }else{
            if(stack[stack.length-1] < left[i]){
                stack.pop(); 
                stack.push(left[i]);  
                answer.push(count); 
                count = 1; 
            }else{
                count++; 
            }
        }
    }

    answer.push(count); 

    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))