# 오늘의매장 (Today Shop)

**AI 기반 로컬 상점 정보 플랫폼 (Ver 1.0 Live)**

## 📚 프로젝트 개요
'오늘의매장'은 공공데이터 상권 정보와 Google Gemini AI를 결합하여, 단순한 상점 목록을 넘어 풍부한 설명과 FAQ를 제공하는 로컬 정보 서비스입니다.

## 🛠 기술 스택
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **AI**: Google Gemini Pro (via `@google/generative-ai`)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Recommended) / Cloudflare Pages Compatible

## 🚀 시작하기

### 1. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 변수를 설정하세요.
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
GEMINI_API_KEY=your_gemini_api_key
```

### 2. 설치 및 실행
```bash
npm install
npm run dev
```

## 📂 프로젝트 구조
- `/src/app`: Next.js App Router 페이지
- `/scripts`: 데이터 수집(ingest) 및 AI 생성(generate) 스크립트
- `/supabase`: DB 스키마 SQL

## 🤖 자동화 (Data Pipeline)
데이터 파이프라인은 GitHub Actions(`.github/workflows/data-pipeline.yml`)를 통해 매주 월요일 실행됩니다.
1. `ingest-data.ts`: 공공데이터 JSON 파싱 및 DB Upsert
2. `generate-content.ts`: 신규 상점에 대한 AI 설명/FAQ 생성

## 📖 매뉴얼
비기술 관리자를 위한 운영 가이드는 `CEO_MANUAL.md`를 참고하세요.
