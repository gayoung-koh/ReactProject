# Exercise 11

## chapter 13

### SPA

- Single Page Application
- 뷰 렌더링은 브라우저가 담당
- 인터랙션 발생 시 필요한 부분만 자바스크립트로 업데이트
- 새로운 데이터 필요 시 서버 API 호출하여 필요 데이터만 가져옴
- 단점: 앱의 규모가 커질 시 자바스크립트 파일이 너무 커짐 -> 코드 스플리팅으로 개선

### 라우팅

- 다른 주소에 다른 화면 보여주기
- 리액트 라우팅 라이브러리 리액트 라우터(react-router) 사용하기
- 문제점: 검색 엔진과 같이 크롤러를 사용하는 경우 페이지 정보를 제대로 수집해가지 못할 수 있음 -> 서버 사이드 렌더링으로 해결

### Route 컴포넌트 사용

```
<Route path="주소 규칙" component={보여 줄 컴포넌트} />
```

#### URL 파라미터

- 유동적인 값일 때, props로 받아서 조회
- match 객체의 params 참조

#### URL 쿼리

- location 객체의 search 값에서 조회
- qs 라이브러리를 사용하여 쿼리 문자열을 객체로 변환

### 서브 라우트

- 라우트 내부에 다른 라우트를 정의

### 부가 기능

- history: 뒤로 가기, 로그인 후 화면 전환, 다른 페이지로의 이탈 방지
- WithRouter: HoC(Higher-order Component), 라우트 컴포넌트가 아니어도 match, location, history 객체 접근하도록 함, location, match 객체 내용 확인 가능
- Switch: 여러 Route 중 일치하는 하나의 라우트만 렌더링, 모든 규칙과 일치하지 않을 시 Not Found 페이지 구현 가능
- NavLink: 현재 경로와 Link에서 사용하는 경로가 일치할 경우 특정 스타일을 적용
