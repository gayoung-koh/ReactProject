# Exercise5

## chapter 7

### 컴포넌트 라이프사이클 메소드

- 클래스형 컴포넌트에서 사용
- Will 접두사: 특정 작업 전 실행
- Did 접두사: 특정 작업 후 실행
- 마운트, 업데이트, 언마운트

### 라이프사이클 메소드 종류

- 마운트
  - constructor
  - getDerivedStateFromProps
  - render
  - componentDidMount
- 업데이트
  - getDerivedStateFormProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidMount
- 언마운트
  - componentWillUnmount

### 에러 잡아내기

- componentDidCatch 사용하여 App.js에서 componet를 감싸주는 방식으로 사용
