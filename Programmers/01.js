// programmers 
// 모의고사 

function solution(answers) {
    var answer = [];

    let pattern = [1,2,3,4,5, 2,1,2,3,2,4,2,5, 3,3,1,1,2,2,4,4,5,5]
    let length = [0,5,13,23]; 
    let scores = []; 

    for(let k=1; k<=3; k++){
        
        let score = answers.slice(); 
        score = score.map((e,i)=>{
            if(e === pattern[i%(length[k]-length[k-1]) + length[k-1]]) return 1;  
            else return 0; 
        }).reduce((acc, cur)=>acc+cur, 0); 
    
        scores.push(score); 
    }
    
    let max = Math.max(...scores); 
    console.log(scores); 
    for(let i=0; i<3; i++){
        if(scores.indexOf(max, i)+1 && !answer.includes(scores.indexOf(max, i)+1))
            answer.push(scores.indexOf(max, i)+1); 
    }
    return answer; 
}

console.log(solution([3,3,1,1,2,2,4,4,5,5])); 