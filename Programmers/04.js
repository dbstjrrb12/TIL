function solution(nums) {
    var answer = 0;
    let map = new Map(); 
    let len = nums.length; 
    let size = 0 ;

    for(let x of nums){
        map.set(x, map.get(x)+1 || 1); 
    }

    size = map.size; 

    if(len/2 < size){
        answer = len/2
    }else if(len/2 == size){
        answer = size; 
    }else{
        answer = size; 
    }    
    
    return answer;
}

console.log(solution([3,1,2,3]));

// time over 
function solution2(nums) {
    var answer = 0;
    let map = new Map(); 

    function DFS(v, s){
        if(v == parseInt(nums.length/2)){
            console.log(map); 
            answer = Math.max(answer, map.size); 
            
            return; 
        }else{
            for(let i=s; i<nums.length; i++){
                map.set(nums[i], map.get(nums[i])+1 || 1); 
                DFS(v+1, i); 
                if(map.get(nums[i])){
                    map.set(nums[i], map.get(nums[i])-1); 
                    if(map.get(nums[i]) === 0) map.delete(nums[i]); 
                } 
            }
        }
    }

    DFS(0,0);

    
    return answer;
}
