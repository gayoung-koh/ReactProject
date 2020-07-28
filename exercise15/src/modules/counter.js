import { createAction, handleActions } from 'redux-actions';
// const 액션 타입 = 모듈 이름/액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// export 키워드: 다른 파일에서 사용할 수 있도록
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

/*
export와 export default의 차이:
export는 여러 개 내보내기 가능, export default는 한 개만 가능
불러오기 방식에서도 차이가 있음
export 의 경우 {} 사용
*/

export default counter;
