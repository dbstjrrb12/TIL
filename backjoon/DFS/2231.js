// 백준 2231 분해합 
// 완전 탐색을 통해서 가능한 모든 숫자를 탐색하는 방법이다. 

let target = parseInt(require('fs').readFileSync('/dev/stdin').toString().split(' '));

let rt = target; 

// lt의 경우는 target 숫자에서 target의 자리수 만큼 9를 곱한 숫자를 빼어서 초기화 하였다. 
// 분해합의 경우 각 자리수가 0~9 사이의 숫자이기 때문에, 각 자리수의 합이 9 * (자리수)를 넘지 않을 것이기 때문이다. 
let lt = target - rt.toString().length * 9; 
let answer = 0; 

for(let i = lt; i<rt; i++){
    if(i.toString().split('').map((n)=>parseInt(n)).reduce((acc, cur)=>acc+cur, 0) + i == target){
        answer = i; 
        break; 
    }
}
console.log(answer); 

