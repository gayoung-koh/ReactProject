# Exercise4

## chapter5 ~ chapter6

### ref

ref는 DOM에 이름을 다는 역할

ref를 사용하는 경우는 DOM을 직접 조작해야 할 때

state로 해결할 수 있는 경우

state만으로 해결할 수 없는 기능: ref를 사용

- 특정 input에 focus
- 스크롤 박스 조작
- Canvas에 그림 그리기

ref 사용 방법

- 콜백 함수
- createRef

컴포넌트에도 ref 적용 가능

- 컴포넌트 내부의 메소드, 멤버 변수에 접근 가능

주의사항

- ref를 꼭 사용해야 하는지 고려하기
- 서로 다른 컴포넌트끼리 데이터를 교류할 때 사용하지 않기: 결과적으로 스파게티 구조를 형성할 수 있음
- 컴포넌트 사이의 데이터 교류를 부모와 자식 간의 흐름으로 교류할 것

### 컴포넌트 반복

js map function

- arr.map(callback, [thisArg])
- callback: parameters - currentValue, index, array
- thisArg(option)

js filter function

- arr.filter(callback)
- callback: parameters - currentValue
- 조건을 사용하여 배열을 필터링하는 기능

map function의 원리를 사용하여 컴포넌트로 구성된 배열을 생성 (IterationSample.js 참고)

key를 사용하여 유동적인 데이터 변화(추가, 제거)에 빠르게 대응하기

- 객체의 고유한 값을 사용하거나 map function의 callback 함수의 인수인 index 사용
- index 사용은 리렌더링이 비효율적
- 객체를 생성하여 고유의 id 값을 사용하는 방식을 추천

주의사항
컴포넌트 배열 렌더링에서 key 값이 중복되면 렌더링 과정에 오류 발생
state 안에서 배열을 변경할 경우 concat, filter 등의 함수를 사용하여 새 배열을 생성한 후 새로운 상태로 업데이트
