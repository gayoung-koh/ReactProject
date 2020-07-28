# Exercise15

## chapter 17 - redux with react project

- 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 패턴 사용
- 프레젠테이셔널 컴포넌트: 상태 관리X, props를 받아 화면에 UI를 보여줌
- 컨테이너 컴포넌트: 리덕스와 연동, 상태를 받고 리덕스 스토어에 액션 디스패치

### 리덕스 코드 작성

- 액션, 액션 생성 함수, 리듀서를 각각 파일로 분리하여 작성하는 방식
- 기능별로 묶어서 파일 하나에 작성하는 방식(Ducks 패턴) - 모듈이라고 부름
- 구성: 액션 타입, 액션 생성 함수, 초기 상태, 리듀서
- 스토어를 만들 경우 리듀서를 하나만 사용함: combineReducers 유틸함수 사용하여 하나로 합쳐줌(루트 리듀서)
- src/index.js에서 스토어 생성 후 리덕스 적용
  - 스토어와 리덕스 함수 import
  - react-redux의 Provider 사용하여 스토어를 사용할 수 있도록 함: store를 props로 전달
- chrome extension redux Devtools 를 사용하면 리덕스 스토어 상태를 쉽게 확인할 수 있음
- 컨테이너 컴포넌트와 리덕스 연동을 위해서는 react-redux의 connect 함수를 사용

```
const makeContainer = connect(mapStateToProps, mapDispatchToProps)
makeContainer(타깃 컴포넌트)
```

- mapStateProps: 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
- mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

#### redux-actions 라이브러리, immer 라이브러리 활용

- 리덕스를 편하게 사용할 수 있음
- redux-actions: createAction, handleActions 함수를 사용하여 액션 생성 함수와 리듀서 함수를 짧은 코드로 구현할 수 있음
- immer: 객체의 구조가 복잡하거나 객체 배열을 다뤄야 하는 경우 ...(spread operator)를 사용하지 않고 immer를 사용하면 좋음

#### Hooks를 사용한 컨테이너 컴포넌트

- connect 함수 대신 Hooks 사용 가능
- useSelector, useDispatch, useStore
- useDispatch는 useCallback과 함께 사용하는 것을 권장함
- useActions 유틸 Hook 만들어 사용
- connect함수는 해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링 될 때, 해당 컨테이너 컴포넌트의 props가 바뀌지 않았을 경우엔 리렌더링 방지하여 성능을 최적화 함
- useSelector를 사용할 경우 React.memo를 컨테이너 컴포넌트에 사용하여 성능을 최적화해주어야 함
