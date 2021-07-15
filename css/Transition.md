# CSS/속성 - 전환 

## 전환(Transition)

- (단축속성) css 속성의 시작과 끝을 지정하여 중간 값을 애니메이션

- 전환 속성은 바뀌기 전의 선택자에 입력한다. 

```css
transition-property : all /* 전환 효과를 사용할 속성 이름 */
transition-duration : 0s  /* 전환 효과 지속 시간 설정, ms 단위도 가능 */
transition-timing-function : ease  /* 타이밍 함수 지정 */
transition-delay : 0s  /* 전환 효과의 대기시간 설정, ms 단위도 가능  */
```

```css
.box1{
    width : 100px; 
    height : 200px; 
    background-color : tomato; 

    transition : width 1s, background 1s;
    transition-property : width, background ; /* 전환 효과를 적용할 속성만 작성 */
    transition-timing-function : 

}

.box1:hover{
    width : 300px; 
    background : blue; 
}
```

- 타이밍 함수란? 전환효과가 시작부터 끝까지 일정하게 적용될지 혹은 점점 빨라질지 등 변화하는 속도를 지정하는 함수 ([easing fuction](https://easings.net/ko)

    ease : 빠르게 - 느리게 
    linear : 일정하게 
    ease-in : 느리게-빠르게 
    ease-out : 빠르게-느리게 
    ease-in-out : 느리게-빠르게-느리게 
    cubic-bezier(n,n,n,n) : 자신만의 값을 정의(0~1)
    steps(n) : n번 분할된 애니메이션 - 횟수대로 쪼개서 보여줌 


## Transform

- 요소의 변환 효과(변형)를 지정 

```css
transform : 변환함수1 변환함수 2 변환함수 3 ...; 
transform : 원근법 이동 크기 회전 기울임; 
```

### 2D 변형 효과 

- 다음 함수를 이용해서 transform 효과를 줄 수 있다. 

    1. translate(x,y) : move to (x, y) (단위)
    2. trasnlateX(x) : move to (x)
    3. translateY(y) : move to (y)
    > position은 그 자리에 배치한 상태에서 고정된다면, translate는 움직임이 바뀌는 경우에 적용 
    > position의 경우 애니메이션에 특화되지 않기 때문에 페이지 과부하가 생길 수 있기 때문에 애니메이션에 특화된 transition 사용하는 것이 좋다 

    4. scale(x, y) : size to (x, y) (배수)
    5. scaleX(x)
    6. scaleY(y)  

    7. rotate(degree) : 회전 (deg)

    8. skew(x-deg, y-deg) : 기울임(deg)(x축,y축)(음수값 가능)
    9. skewX(x-deg) : 기울임(deg)(x축)
    10. skewY(y-deg) : 기울임(deg)(y축)

    11. matrix(n,n,n,n,n,n) : 2차원 변환 효과 
 

