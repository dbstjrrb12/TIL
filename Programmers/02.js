// programmers 
// 신규 아이디 추천 

function solution(new_id) {
    var answer = '';
    let reg = /[a-z0-9\.\_\-]/
    let stack = []; 

    new_id = new_id.toLowerCase();

    for(let x of new_id){
        if(reg.test(x))
            stack.push(x); 
    }
    
    stack = stack.join(''); 
    console.log(stack); 
    
    return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));