# CSS/속성 - 애니메이션 

## animation 

- 요소의 애니메이션을 설정/제어(단축속성)

- 실제로 애니메이션을 만드는 것이 아니라 '@keyframe' 규칙에 따른 애니메이션 속성을 지정하고 제어하는 기능 

    animation : 애니메이션이름 지속시간 [타이밍 함수 대기시간 반복횟수 반복방향 전후상태 재생/정지]

    > 애니메이션 이름 : @keyframe 규칙을 활용해 작성 


## keyframe 규칙 

- 2개 이상의 애니메이션 중간 상태(프레임)을 지정

```
    @keyframes 애니메이션이름{
        0%{
            속성 : 값; 
        }
        50%{
            속성 : 값; 
        }
        100%{
            속성 : 값; 
        }
    }

    > 퍼센티지는 자유롭게 추가할 수 있음 
```

- transition은 0%, 100% 만 제어할 수 있는 것과 달리 다양하게 애니메이션을 제어할 수 있음 

## 애니메이션 속성(1)- animation-name, animation-duration 

- animation-name : @keyframes 규칙에 따른 애니메이션 이름을 지정 

- animation-duration : 지속시간을 설정 (초 단위로 작성 / 1s = 1000ms)

## 애니메이션 속성(2)- animation-timing-function, animation-delay 

- animation-timing-function : transition timing function 과 동일 

```
    ease : 빠르게 - 느리게 
    linear : 일정하게 
    ease-in : 느리게-빠르게 
    ease-out : 빠르게-느리게 
    ease-in-out : 느리게-빠르게-느리게 
    cubic-bezier(n,n,n,n) : 자신만의 값을 정의(0~1)
    steps(n) : n번 분할된 애니메이션 - 횟수대로 쪼개서 보여줌 
```

- animation-delay : 애니메이션 적용되기까지 대기 시간 설정

    > 음수가 허용됨. 음수일 경우 바로 시작하지만 그 값만큼 duration 시간이 차감된다. 
 
    > 단축속성으로 사용할 경우, duration 보다 뒤에 있기만 하면 됨

## 애니메이션 속성(3)- animation-iteration-count, animation-direction 

- animation-iteration-count : 애니메이션 반복 횟수를 설정 

    animation-iteration-count : 횟수 or infinite(무한대)

- animation-direction : 애니메이션 반복 방향을 설정 

```
    animation-direction : normal // 정방향만 반복
    animation-direction : reverse // 역방향만 반복
    animation-direction : alternate // 정방향에서 역방향으로 반복(왕복), 횟수가 적어도 2 이상여야 함. 
    animation-direction : alternate-reverse // 역방향에서 정방향으로 반복(왕복)
```

## 애니메이션 속성(4)- animation-fill-mode

- 애니메이션 적용 상태 전과 후의 상태를 정의할 수 있음 

```
    1. none : 기존 위치에서 시작 > 애니메이셔 시작 위치 이동 > 기존 위치에서 끝 
    2. fowards : 기존 위치에서 시작 > 애니메이셔 시작 위치 이동 > 애니메이션 끝 위치에서 끝 
    3. backwards : 애니메이션 시작 위치 > 동작 > 기존 위치에서 끝 
    4. both : 애니메이션 시작 위치 > 동작 > 애니메이션 끝 위치에서 끝 
```

## 애니메이션 속성(5)- animation-play-state

- 애니메이션의 재생과 정지를 설정 

```
    1. running : 동작 (기본값)
    2. paused  : 정지 
```
 