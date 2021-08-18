function solution(record) {
    var answer = [];
    let map = new Map(); 

    record = record.map((e)=>{
        return e.split(' '); 
    })

    for(let x of record){
        if(x[0] === 'Enter'){
            map.set(x[1], x[2]); 
        }else if(x[0] === 'Change'){
            map.set(x[1], x[2]); 
        }
    }

    for(let x of record){
        if(x[0] === 'Enter'){
            answer.push(map.get(x[1]) + "님이 들어왔습니다."); 
        }else if(x[0] === 'Leave'){
            answer.push(map.get(x[1]) + "님이 나갔습니다."); 
        }
    }

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))