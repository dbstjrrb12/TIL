function solution(numbers, hand) {
    var answer = '';
    let left = [3, 0]; 
    let right = [3, 2]; 
    let pos = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0],[2,1], [2,2], [3,0], [3,1], [3,2]]; 

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            answer += "L"; 
            left[0]= pos[numbers[i]-1][0]; 
            left[1]= pos[numbers[i]-1][1]; 
        }else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            answer += 'R'; 
            right[0]= pos[numbers[i]-1][0]; 
            right[1]= pos[numbers[i]-1][1];
        }else{
            let target; 
            if(numbers[i] === 0){
                target = [3, 1]; 
            }else{
                target = pos[numbers[i]-1]; 
            }
        
            let left_sum = Math.abs(target[0] - left[0]) + Math.abs(target[1] - left[1]); 
            let right_sum = Math.abs(target[0] - right[0]) + Math.abs(target[1] - right[1]); 

            console.log(left_sum, right_sum)

            if(left_sum < right_sum){
                answer += "L";
                left[0]= target[0]; 
                left[1]= target[1]; 
            }else if(left_sum > right_sum){
                answer += "R";
                right[0]= target[0]; 
                right[1]= target[1]; 
            }else if(left_sum == right_sum){
                if(hand === 'right'){
                    answer += "R";
                    right[0]= target[0]; 
                    right[1]= target[1]; 
                }else{
                    answer += "L";
                    left[0]= target[0]; 
                    left[1]= target[1]; 
                }
            }
        }
    }
    return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'))