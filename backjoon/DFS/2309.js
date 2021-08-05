// 백준 2309 일곱난쟁이

function solution(nums){
  
    let answer=[] ;
    let len = nums.length; 
    let ch = Array.from({length:nums.length+1}, ()=>0); 
    let tmp = []; 
  
    function DFS(L, sum){ 
      if(L === 7){
          if(sum == 100)
             answer.push(tmp.slice().sort((a,b)=>a-b))
      }else{
        for(let i=0; i<len; i++){
          if(ch[i+1] == 0){
            ch[i+1] = 1; 
            tmp.push(nums[i]); 
            DFS(L+1, sum+nums[i]); 
            tmp.pop(); 
            ch[i+1] = 0; 
          }
        }
      }
    }
  
    
    DFS(0, 0); 
    return answer[0]; 
  
  }
  
console.log(solution([20,7, 23,19,10,15,25,8,13]))