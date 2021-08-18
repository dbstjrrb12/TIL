// 비밀 지도 

function solution(n, arr1, arr2) {
    var answer = [];
    let map = []; 
    let s = ""; 

    map = arr1.map((e, i)=>arr1[i] | arr2[i]);

    answer = map.map(e=>{
        s = []; 
        DFS(e)
        while(s.length < n){
            s.unshift(" "); 
        }
        return s.join('');  
    }); 

    function DFS(v){
        if(v === 1 || v === 0){
            if(v === 1) s.push("#"); 
            else s.push(" "); 
            return; 
        }else{
            DFS(parseInt(v/2)); 
            if(v%2 === 1){
                s.push("#"); 
            }else{
                s.push(" "); 
            }
        }
    } 
 
    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
