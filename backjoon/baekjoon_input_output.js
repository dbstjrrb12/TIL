const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); // 이 부분은 입력값을 받아오기 위해 필요한 부분인 것 같아요. 그냥 항상 앞에 넣으시면 될 것 같습니다.

rl.on('line', line => {
    // line 변수에 입력받은 값이 문자열로 들어옵니다.

    const input = line.split(' ').map(a => a - 0);
    // 저는 line 변수로 받은 값을 잘 자르고 수로 바꾸어 input 배열에 담았어요.
    // 만약 여러 줄로 입력받았다면 .split('\n')으로 잘라서 사용하면 될 것 같습니다.

    const answer = input[0] + input[1];
    // 이 부분에서 하고 싶은 코딩을 모두 하시고

    console.log(answer);
    // 답을 출력하면 됩니다!
    // 이 아래 부분도 그냥 넣으면 되는 것 같아요.

    rl.close();
}).on("close", () => {
    process.exit();
});