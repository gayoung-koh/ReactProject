# Exercise 17

## chapter 19

### 코드 스플리팅

- 리액트 프로젝트 빌드 시 웹팩(webpack) 도구는 프로젝트 내의 모든 자바스크립트 파일을 하나로 합치고 css 파일도 하나로 합친다.
- CRA로 프로젝트를 빌드할 시 SplitChunks 기능을 적용하여 node_modules에서 불러온 파일과 일정 크기 이상의 파일, 공유된 파일을 자동 분리하여 캐싱의 이점을 살리도록 한다
- 위와 같이 파일을 분리하는 작업을 코드 스플리팅이라고 함
- 코드 비동기 로딩: JS 함수, 객체, 컴포넌트 등을 필요한 시점에 불러서 사용

#### 함수 스플리팅

- import를 코드 상단이 아닌 함수 형태로 메소드 안에서 사용하면 파일이 분리되어 저장됨

#### 컴포넌트 코드 스플리팅

- React.lazy, Suspense를 사용하여 state를 선언하지 않고 컴포넌트 코드 스플리팅을 할 수 있음
- React.lazy: 컴포넌트의 렌더링 시점에 비동기적 로딩

```
const SplitMe = React.lazy(() => import('./SplitMe'));
```

- Suspense: 코드 스플리팅된 컴포넌트를 로딩하도록 발동, 로딩이 끝나기 전 보여줄 UI 설정

```
import React, { Suspense } from 'react';

<Suspense fallback={<div>loading...</div>}>
  <SplitMe />
</Suspense>
```

#### Loadable Components를 통한 코드 스플리팅

- 서버 사이드 렌더링 지원
- 렌더링 전 필요할 때 스플리팅된 파일을 미리 불러올 수 있음

```
const onMouseOver = () => {
    SplitMe.preload();
};
```
