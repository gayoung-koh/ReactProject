# Exercise 12

## chapter 14 - News Viewer with external API

### asynchronous

- 서버의 API를 사용하는 경우 응답이 올 때까지 기다려야 하는 상황이 발생 -> 작업을 비동기로 처리하여 웹 애플리케이션이 멈추지 않고 실행되도록 함
- setTimeout 함수를 사용한 작업 예약 시 -> 코드가 차례로 실행된 후 특정 시간으로 예약한 작업을 호출
- 콜백 함수를 사용하여 비동기 작업 처리

```
function printMe() {
console.log('Hello World!');
}
setTimeout(printMe, 3000);
console.log('대기 중...');
```

- ex. setTimeout 함수의 인자로 전달한 printMe를 콜백 함수라고 함

### 콜백 함수

- 특정 함수가 처리된 직후 어떠한 작업을 하고자 할 때 콜백 함수를 사용하여 작업함
- 여러 번 순차 처리 시 콜백 함수 중첩하여 구현 가능
- 중첩 콜백의 문제: 코드의 가독성이 나빠짐(콜백 지옥) -> Promise 사용

### Promise

- ES6에 도입된 기능
- 연속 작업에서 함수를 여러 번 감싸는 것이 아닌 .then을 사용하여 다음 작업을 설정

### async/await

- Promise를 쉽게 사용할 수 있도록 함
- 함수의 앞에 async 키워드 추가, 함수 내부에서 Promise 앞에 await 키워드 사용
- Promise 끝날 때까지 기다리고, 결과를 특정 변수에 저장 가능

### axois

- 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트
- HTTP 요청을 Promise 기반으로 처리

### News Viewer components

- components/NewsItem
- components/NewsList
- components/Categories
- pages/NewsPage
- lib/usePromise

#### 유의사항

- useEffect에 등록하는 함수는 async로 작성하지 말것
- 함수 내부에 async 함수를 따로 만든다
