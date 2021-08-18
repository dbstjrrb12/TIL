// 미완 메뉴 개발

function solution(orders, course) {
    var answer = [];
    let map = new Map(); 
    // let order_cnt = Array.from({length: orders.length}, ()=>0);  

    let len = 0; 
    // let count = 0; 
    
    orders.sort((a,b)=>{return a.length-b.length});
    len = orders.length; 

    for(let i=0; i<len; i++){
        if(!course.includes(orders[i].length)) continue; 

        for(let j=0; j<len; j++){
            if(i !== j){
                let tmp = LST(orders[i], orders[j]).join(''); 
                if(tmp !== "") map.set(tmp, map.get(tmp)+1 || 1); 
            }
        }
        // order_cnt[i] = count; 
        // count = 1 ; 
    }



    // answer.sort((a,b)=>{
    //     if(a>b) return 1; 
    //     else if(a < b) return -1; 
    //     else return 0; 
    // })
    return answer;
}

function LST(str1, str2){

    let arry = Array.from({length: str1.length+1}, ()=>Array(str2.length+1).fill(0)); 

    let row = str1.length; 
    let col = str2.length; 
    let common = []; 

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(str1[i] === str2[j]){
                arry[i+1][j+1] = arry[i][j] + 1
            }else{
                let top = arry[i][j+1]; 
                let left = arry[i+1][j]; 

                arry[i+1][j+1] = Math.max(top, left); 
            }
        }
    }

    function DFS(i, j){
        if(i == 0 || j == 0){
            return; 
        }else{
            if(str1[i-1] !== str2[j-1]){
                if(arry[i-1][j] > arry[i][j-1]){
                    DFS(i-1, j); 
                }else{
                    DFS(i, j-1); 
                }
            }else{
                DFS(i-1, j-1); 
                common.push(str1[i-1]); 
            }
        }
    }

    DFS(row, col); 
    console.log(arry); 
    console.log(common); 
    // return arry[row][col]; 
    return common; 
}

console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5])); 