function solution(n, lost, reserve) {
    var answer = 0;
    let avail_stu = []; 
    

    for(let x of reserve){
        if(lost.includes(x)){
            lost.splice(lost.indexOf(x), 1); 
        }else{
            avail_stu.push(x); 
        }
    }
    
    for(let x of avail_stu){
        let front = x-1; 
        let back = x+1; 
        if(lost.includes(front)) lost.splice(lost.indexOf(front), 1); 
        else if(lost.includes(back)) lost.splice(lost.indexOf(back), 1); 
    }

    answer = n - lost.length; 
    return answer;
}

console.log(solution(5, [2,4], [1,2,3,5])); 