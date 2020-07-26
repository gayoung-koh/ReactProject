# Exercise6

## chapter 8

### Hooks

#### useState

- 가장 기본적인 Hook: 함수형 컴포넌트에서 가변적인 상태를 지닐 수 있게 함

#### useEffect

- 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있음
- 클래스형 컴포넌트의 라이프사이클 메소드 중 componentDidMount + componentDidUpdate 형태로 볼 수 있음
- 두 번째 파라미터 배열의 요소에 따라 실행 조건이 달라짐
- 컴포넌트의 언마운트 전 또는 업데이트 직전에 수행하려는 작업은 useEffect에서 뒷정리 함수를 반환해주어야 함

### useReducer

- 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수

### useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산 최적화

### useCallback

- useMemo와 비슷하게 렌더링 성능 최적화에 사용
- 이벤트 핸들러 함수를 필요할 때만 생성할 수 있음

```
useCallback(() => {
  console.log('hello world!');
}, [])

useMemo(() => {
  const fn = () => {
    console.log('hello world!');
  };
  return fn;
}, [])
```

- 숫자, 문자열, 객체와 같이 일반 값 재사용은 useMemo를, 함수 재사용에는 useCallback을 사용하자

### useRef

- 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 함
