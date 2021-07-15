# CSS/속성 - 배경 

## background 

- 배경의 색상을 설정하는 단축 속성 (단축속성 사용 시, 개별 속성 누락 가능 )

```css
background : 색상 이미지경로 반복 위치 스크롤특성; 
```

- 사용 예제 

```css
.box1{
    background : red url({이미지 경로}) no-repeat left top scroll; 
}
```

## background-color 

- 요소의 배경 색상을 지정 (개별 속성)(기본 값 : transparent)

```css
background-color : 색상(or transparent);
```

## bacground-image

- 요소 배경에 하나 이상의 이미지를 삽입 

```css
background-image : none(or url(')); 
background-image : url(), url(); // 다중 이미지 삽입은 ',' 로 구분한다. 
```

- 단축 속성을 사용할 경우 속성에 대한 작성을 완료한 후 ',' 기준으로 나눠줘야 한다. 

```css
bacground : url('') no-repeat, url('') ...; 
```

> 다중 이미지의 경우 나중에 입력한 값이 가장 뒤에 위치한다. 

- IE8 이하는 지원하지 않는다.

- 요소의 배경에 이미지가 들어가기 때문에, 요소의 넓이 높이 값이 명시되어야 한다. 

## background-repeat

- 요소의 배경에 이미지가 범위 내에서 이미지가 반복되는 걸 제어하는 속성 

```css
background-repeat : repeat ;
background-repeat : no-repeat ; 
background-repeat : repeat-x ; /* 수평으로 반복 */
background-repeat : repeat-y ; /* 수직으로 반복 */ 
```

## background-position 

- 배경 이미지의 위치를 설정 

``` css
background-position : 20% 40% ; /* x축 y축  왼쪽 상단이 0% 0%, 오른쪽 상단이 100% 100%*/ 
background-position :  방향 ; /* top, bottom, right, left, center */ 
background-position : px, cm, em 등;
```
- 값이 '방향' 일 경우에는 순서를 바꿔도 x,y 축이 자동으로 적용되는 반면 단위는 x,y축 순서대로 작성해야 한다. 

- 값에 단위와 방향을 동시에 사용할 수 있다. 다만 x,y 축 순서를 고려해서 작성 

> top, bottom : x축 

> right, left : y축

## background-attachment

- 요소가 스크롤 될 때 배경 미지의 스크롤 여부 결정 

```css
backgrou nd-attachment : scroll; /* 기본 값 */ 
background-attachment : fixed ; /* 배경 이미지가 뷰포트에 고정되어, 요소와 같이 스크롤 되지 않음 */
background-attachment : local ; /* 요소 내 스크롤 시 배경 이미지가 같이 스크롤 됨 */ 
```

## background-size

- 배경 이미지의 크기를 조정하는 속성 

```css
background-size : auto; /* 원래 크기로 표시됨 */ 
background-size : 단위 ; /* px, em 단위 등으로 표시. 넓이 높이 순서대로 입력하되, 넓이 값만 입력하면 자동으로 비율 조정하여 높이값 설정 */ 
background-size : cover; /* 배경 이미지의 크기 비율을 유지하며, 요소의 더 넓은 너비에 맞춰짐. 이미지가 잘릴 수 있음 */
background-size : contain; /* 배경 이미지의 크기 비율을 유지하며, 요소의 더 짧은 너비에 맞춰짐. 이미지가 잘리지 않음  */  
```

