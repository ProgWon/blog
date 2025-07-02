# 개발 블로그 프로젝트

기술 스택과 최신 프론트엔드 도구를 활용한 개발 블로그 웹 애플리케이션입니다.

## 기술 스택

### 프레임워크

- Next.js
- React
- TypeScript

### 상태 관리

- React-Query (TanStack Query)
- Recoil
- Jotai

### 스타일링

- Emotion (모바일 환경)
- Vanilla-extract (데스크탑 환경)

### 빌드 도구

- Webpack
- SWC
- Babel
- Vite

### 실시간 처리

- WebSocket (socket.io-client)
- SSE (Server-Sent Events)

### 패키지 관리

- PNPM

### 형상 관리

- GitHub
- GitHub Actions

## 시작하기

### 요구 사항

- Node.js 16.x 이상
- PNPM 6.x 이상

### 설치 및 개발 서버 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

### 빌드 및 프로덕션 미리보기

```bash
# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview
```

### 테스트 실행

```bash
# 테스트 실행
pnpm test

# 테스트 커버리지 보고서
pnpm test:coverage
```

## 프로젝트 구조

```
blog/
├── public/          # 정적 파일
├── src/
│   ├── api/         # API 통신 모듈
│   ├── assets/      # 이미지, 폰트 등 에셋
│   ├── components/  # 재사용 가능한 컴포넌트
│   ├── contexts/    # React Context
│   ├── hooks/       # 커스텀 훅
│   ├── layouts/     # 레이아웃 컴포넌트
│   ├── lib/         # 라이브러리 및 유틸리티
│   ├── pages/       # 페이지 컴포넌트
│   ├── styles/      # 전역 스타일 및 테마
│   ├── types/       # 타입 정의
│   └── utils/       # 유틸리티 함수
├── .github/         # GitHub 관련 설정
└── ...              # 설정 파일들
```

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다: `git checkout -b feature/amazing-feature`
3. 변경 사항을 커밋합니다: `git commit -m 'Add some amazing feature'`
4. 브랜치에 푸시합니다: `git push origin feature/amazing-feature`
5. 풀 리퀘스트를 제출합니다.
