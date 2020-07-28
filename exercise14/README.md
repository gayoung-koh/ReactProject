# Exercise1

## chapter 16

### 리덕스 라이브러리

- 리액스 상태 관리
- 컴포넌트 간의 상태 공유 시 여러 컴포넌트를 거치지 않아도 됌
- 코드 유지 보수성, 작업 효율 증대
- 미들웨어로 효율적인 비동기 작업

### 주요 개념

#### 액션과 액션 생성 함수

- 상태의 변화가 필요하면 액션이 발생함
- 객체로 표현함

```
{
    type: 'TOGGLE_VALUE'
}
```

- type은 필수 요소이며 그 이외의 요소들은 상태 업데이트 시 참고할 값

- 액션 생성 함수: 액션 객체를 만드는 함수

```
function addTodo(data) {
    return {
        type: 'ADD_TODO',
        data
    };
}
```

- 매번 액션 객체를 작성하지 않고 함수로 관리하여 번거로움을 방지함

#### 리듀서

- 변화를 일으키는 함수
- 현재 상태와 액션 객체를 파라미터로 받아 새로운 상태를 반환

```
const initialState = {
  counter: 1
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            };
        default:
            return state;
    }
}
```

#### 스토어

- 리덕스 적용을 위해 만드는 것
- 한 프로젝트 당 하나의 스토어
- 현재 애플리케이션 상태와 리듀서 포함
- 그 외의 중요 내장 함수

#### 디스패치

- 스토어의 내장 함수 중 하나
- 액션을 발생시키는 것
- dispatch(action)
- 디스패치 호출 시 스토어가 리듀서 함수를 실행시켜 새로운 상태를 만든다

#### 구독

- 스토어의 내장 함수
- subscribe의 파라미터로 리스너 함수를 호출
- 액션 디스패치 후 상태 업데이트 시 리스너 함수 호출
