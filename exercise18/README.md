# Exercise18

## chapter 20

### 서버 사이드 렌더링

- UI를 서버에서 렌더링 하는 것
- 사용자가 웹 서비스에 방문했을 때 서버 쪽에서 초기 렌더링을 대신 해줌
- 서버 사이드 렌더링의 장점
  - 검색 엔진에서의 페이지 수집 원활
  - 초기 렌더링 성능 개선(대기 시간 최소화, 사용자 경험 향상)
- 서버 사이드 렌더링의 단점
  - 서버 리소스의 사용(서버 과부화의 위험 -> 캐싱과 로드 밸런싱)
  - 데이터 미리 불러오기, 코드 스플리팅과의 호환 등을 고려해야 함
  - 코드 스플리팅된 파일 중 필요한 모든 파일을 렌더링 전에 미리 불러와야 함

#### 서버 사이드 렌더링 프로젝트 진행