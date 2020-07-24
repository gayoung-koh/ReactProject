# Exercise3

### React 이벤트 핸들링

HTML 이벤트 핸들링 방식과 달리 실행할 자바스크립트 코드가 아닌 함수 형태의 값을 이벤트에 전달하는 방식으로 이벤트를 핸들링함

state와 함께 사용할 수 있음

렌더링 메소드 내부에서 함수를 만들어 전달

전달할 함수를 따로 작성하여 임의 메소드를 만들어 사용

- 작성한 함수를 생성자에서 binding
- 바벨의 transform-class-properties 문법 사용하여 화살표 함수로 메소드 정의

클래스형 컴포넌트 방식 함수형 컴포넌트 방식 두가지로 가능

예1) input onChange 이벤트 처리(EventPractice.js ~ EventPractice3.js)

- 단일 input인 경우 state 이름으로 처리하여 state에 저장할 수 있음
- 다중 input인 경우 input name 속성을 사용하여 state에 값을 저장할 수 있음

예2) Enter onKeyPress 이벤트 처리 (EventPractice4.js)

- 핸들러 메소드에서 press된 key의 종류를 구분하여 처리
- input에 여러 이벤트 핸들러를 등록할 수 있음

예3) 함수형 컴포넌트로 이벤트 핸들링 (EventPractice_functionType.js)

- input을 각각의 이벤트 핸들러 메소드로 처리하는 방식
- form 객체를 사용하여 한번에 처리하는 방식
