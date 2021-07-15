# CSS/속성 - Flex

## Flex 개요 

- 화면에서 요소들의 수평 구조를 만들기 위한 방법으로 display 값을 flex로 정의힌다. 

- 우선 Flex는 Container와 Items로 개념이 나뉜다. 

    > Container 는 Items를 감싸는 부모 요소. (<u>diplay : flex</u>가 부여된 요소)

    > 각 Items를 정렬하기 위해서는 Container가 필수이다. 

    ![flex](https://heropy.blog/images/screenshot/css-flexible-box/flex-base.jpg)


## Flex Container 속성(1) - display 

![flex](https://heropy.blog/images/screenshot/css-flexible-box/flex-display.jpg)

- display : flex 

    > <u>container</u>가 기본적으로 블록요소처럼 수직으로 쌓임 

- display : flex 

    > <u>container</u>가 기본적으로 인라인요소처럼 수평으로 쌓임 

## Flex Container 속성(2) - flex-flow

- 단축속성으로 Flex items의 주 축(main-axis)을 설정하고 items의 여러 줄 묶음(줄 바꿈)도 설정한다. 

```
flex-flow : main-axis 여러줄묶음;
```

    > flex-direction : main-axis(기본값 : row)

    > flex-wrap : 여러줄 묶음 (기본값 : nowrap)

- flex-direction 

    > row : item들이 왼 -> 오른쪽으로 수평 정렬 / row-reverse : 오 -> 왼

    > col : item들이 위 -> 아래쪽으로 수직 정렬 / col-reverse : 아래 -> 위 

     ![direction](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg)

- main-axis / cross-axis 

    > 메인 축이 수평(row)이면, 교차 축은 수직(col)이고 그 반대 역시 동일하다 

- flex-start / flex-end 

    > 즉, 메인 축의 시작과 끝점을 표시하는 개념 

    > 메인 축이 수평(row)이면, flex-start는 왼쪽면이고 flex-end는 오른쪽 면이다. 

    > 메인 축인 수평-반대(row-reverse)이면, flex-start는 오른쪽이고 flex-end는 왼쪽 면이다. 


- cross-start / cross-end 

    > 교차 축의 시작과 끝을 표시하는 개념 

    > 메인 축이 수평이면(row & row-reverse)이면, cross-start는 위이고 끝은 아래이다. 

    > 메인 축이 수직이면(col & col-reverse)이면, cross-start는 아래이고 끝은 위다. 
    
## Flex Container 속성(3) - fiex-wrap 

- items의 여러줄을 설정하는 속성이다. 

    > nowrap : 모든 items를 한 줄로 표시 

    > wrap : items를 여러 줄로 묶음 

    > wrap-reverse : items를 wrap의 역방향으로 여러 줄 묶음 

## Flex Container 속성(4) - justify-content

- flex-direction을 통해서 설정한 <u>메인 축</u>을 중심으로 items의 정렬 방법을 설정하는 속성이다. 

    > flex-start : 메인 축의 시작점을 기준으로 정렬

    > flex-end : 메인 축의 끝점을 기준으로 정렬 

    > center : 메인 축의 중심을 기준으로 정렬 

    > space-between : 시작과 끝에 item을 붙이고, 나머지 여백을 균등하게 분배 

    > space-around : 모든 items의 왼쪽과 오른쪽에 균등하게 나머지 여백을 분배 

## Flex Container 속성(5) - align-content

- 교차 축의 정렬 방법을 설정 

- 다만, flex-wrap 속성을 통해 items가 여러 줄 묶음이상이고 여백이 있는 경우에만 사용 가능 

    > strectch : container의 교차 축을 채우기 위해 items를 늘림 (container 너비에 맞추기 위해서 items 너비를 넓히는 것)
    
    > flex-start : 메인 축의 시작점을 기준으로 정렬

    > flex-end : 메인 축의 끝점을 기준으로 정렬 

    > center : 메인 축의 중심을 기준으로 정렬 

    > space-between : 시작과 끝에 item을 붙이고, 나머지 여백을 균등하게 분배 

    > space-around : 모든 items의 왼쪽과 오른쪽에 균등하게 나머지 여백을 분배 

## Flex Container 속성(6) - align-items

- items 묶음의 한 줄에 대한 교차 축 정렬 방법으로 사용한다. 

    > strectch : container의 교차 축을 채우기 위해 items를 늘림 (container 너비에 맞추기 위해서 items 너비를 넓히는 것)
    
    > flex-start : 메인 축의 시작점을 기준으로 정렬

    > flex-end : 메인 축의 끝점을 기준으로 정렬 

    > center : 메인 축의 중심을 기준으로 정렬 

    > baseline : Items를 문자 기준선으로 정렬 

    ![align](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-items.jpg)


## Flex Items 속성(1) - order

- Flex items의 순서를 설정, 숫자가 클수록 순서가 밀린다. 

    > order가 같을 경우, 구조적으로 먼저 만들어진 item이 먼저 나온다 

- 음수가 허용된다. 

## Flex Items 속성(2) - flex-grow

- items의 증가 너비 비율을 설정. 숫자가 크면 더 많은 너비를 가진다. 

- 기본 값 0이면 아무런 효과 없음 

- 전체 컨테이너의 너비 중, grow 값을 통해 일정 비율로 item 너비를 정하는 것이다. 

![grow](https://heropy.blog/images/screenshot/css-flexible-box/flex-grow.jpg)

- item 한 개가 100%의 비율을 갖는다고 해도, 나머지 item들이 없어지는 것은 아니고 나머지 item들을 채운 나머지영역을 모두 갖는다. 

- item의 기본 너비가 지정되어 있다면, 그 값을 반영해서 증가 너비를 계산하는 개념

    > 기본 너비가 100px이라고 하면, 그 100px에서 얼마큼 더 증가할 것인지 계산 

## Flex Items 속성(3) - flex-shrink

- item이 감소하는 너비를 비율을 설정

- flex-basis에 설정된 기본 너비에서 감소 너비를 곱한 값을 item들과 비교하여 상대적인 비율을 산출한다. 

- 산출된 비율에 따라 container가 감소할 때, 비율을 반영하여 item들이 감소한다. 

## Flex Items 속성(4) - flex-basis

- item의 공간 배분 전 기본 너비를 설정

- flex-basis가 auto로 설정되면 width, height 값을 설정할 수 있지만, 실제 단위 값이 주어질 경우에는 설정할 수 없음 

    > auto : item에 있는 content 너비를 제외한 나머지 여백을 기준으로 flex-grow

    > 0 : item 개별 너비를 기준으로 flex-grow

    > px : item 너비에서 basis 너비를 제외한 나머지 너비를 기준으로 flex-grow

## Flex Items 속성(5) - flex

- (단축속성) flex-grow(0) / flex-shrink(1) / flex-basis(auto) 순서대로 작성

    > 주의할 점은 flex 단축 속성에서 basis를 명시하지 않으면 기본 값이 auto가 아니라 0으로 인식됨!!! 

## Flex Items 속성(6) - align-self

- 개별 item의 정렬 방법을 변경하려고 할 경우에 item 요소 내부에 align-self를 작성

    > auto : container의 align-items 속성을 상속받음 
    
    > strectch : container의 교차 축을 채우기 위해 items를 늘림 (container 너비에 맞추기 위해서 items 너비를 넓히는 것)
    
    > flex-start : 메인 축의 시작점을 기준으로 정렬

    > flex-end : 메인 축의 끝점을 기준으로 정렬 

    > center : 메인 축의 중심을 기준으로 정렬 

    > baseline : Items를 문자 기준선으로 정렬 

- align-items 속성보다 우선하여 적용 