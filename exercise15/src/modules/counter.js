// const 액션 타입 = 모듈 이름/액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// export 키워드: 다른 파일에서 사용할 수 있도록
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

/*
export와 export default의 차이:
export는 여러 개 내보내기 가능, export default는 한 개만 가능
불러오기 방식에서도 차이가 있음
export 의 경우 {} 사용
*/

export default counter;
