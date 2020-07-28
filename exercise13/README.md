# Exercise13

## chapter 15

### Context API

- 환경 설정, 사용자 정보와 같이 전역적으로 필요한 상태 관리
- App의 state로 관리할 시 여러 컴포넌트를 거쳐 전달 필요(부모->자식의 흐름) -> Context API를 통해 전역 상태를 쉽게 관리
- 전역적으로 다뤄야 하는 상태가 있으며 컴포넌트 개수가 많을 때 용이함
- Context API 개선 이전(v16.3이전)에는 리덕스를 주로 사용하였음
- 모든 상황에서 리덕스를 대체할 수는 없음

#### Consumer

- consumer 사이에 중괄호로 함수 전달(function as a child, Render Props)

#### Provider

- Context value 변경 시 사용
- 반드시 value를 명시할 것

#### Hook 또는 static contextType 사용하기

- context 값을 사용할 때 Consumer 대신 사용할 수 있는 방식
- useContext Hook: 함수형 컴포넌트에서 Context 편리하게 사용
- static contextType: 클래스 메소드에서도 Context에 넣어 둔 함수 호출 가능, 하나의 Context만 사용할 수 있음
- useContext 권장
