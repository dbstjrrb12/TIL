// programmers 
// 신규 아이디 추천 

function solution(new_id) {
    var answer = '';
    let reg = /[a-z0-9\.\_\-]/
    let stack = []; 

    // 1단계 소문자
    new_id = new_id.toLowerCase();

    // 2단계 정규식 검사 
    for(let x of new_id){
        if(reg.test(x))
            stack.push(x); 
    }
    // 3단계 중복되는 점 제거 
    let tmp = []; 

    for(let i=0; i<stack.length; i++){
        if(i+1 < stack.length && stack[i] === '.' && stack[i+1] === '.') continue; 
        else tmp.push(stack[i]) ; 
    }

    stack = tmp.slice(0,tmp.length); 
    
    // 4단계 
    if(stack[0] === '.') stack.shift(); 
    if(stack[stack.length-1] === '.') stack.pop(); 
    
    // 5단계 
    if(stack.length === 0) stack.push('a'); 

    // 6단계, 7단계
    if(stack.length >= 16){
        stack = stack.splice(0,15); 
        
        if(stack[0] === '.') stack.shift(); 
        else if(stack[stack.length-1] === '.') stack.pop(); 
    }else if(stack.length < 3){
        let lastchar = stack[stack.length-1]; 
        while(stack.length < 3){
            stack.push(lastchar); 
        }
    }
    answer=stack.join(''); 

    return answer;
}

function solution2(new_id){
    let answer = new_id; 
    answer = answer.toLowerCase()
        .replace(/[^a-z0-9._-]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\./, '')
        .replace(/^$/, 'a')
        .slice(0,15)
        .replace(/\.$/, ".");
    
    if(answer.length < 3){
        let char = answer[answer.length-1]; 
        while(answer.length < 3){
            answer+=char; 
        }
    }

    return answer; 
}
console.log(solution("...!@BaT#*.....y.abcdefghijklm"));
