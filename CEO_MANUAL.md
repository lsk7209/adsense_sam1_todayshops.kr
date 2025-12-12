# CEO Manual: 오늘의매장 (36_today_shop)

## 👋 프로젝트 소개
**오늘의매장**은 공공데이터와 Generative AI(Gemini)를 결합하여, 단순한 상점 목록을 넘어 **"살아있는 로컬 정보 플랫폼"**을 지향하는 서비스입니다.
이 문서는 기술적인 내용을 모르셔도 서비스를 운영하고 확장하실 수 있도록 작성되었습니다.

---

## 🚀 1. 빠른 시작 (Quick Start)

### 1.1 환경 설정 (최초 1회)
이미 `supabase/schema.sql`을 통해 데이터베이스가 준비되어 있어야 합니다.
프로젝트 루트의 `.env.local` 파일에 다음 키들이 **반드시** 입력되어야 합니다.

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=... (데이터 입력용 관리자 키)
GEMINI_API_KEY=... (AI 콘텐츠 생성용)
```

### 1.2 로컬에서 실행하기
터미널에서 다음 명령어를 입력하면 내 컴퓨터에서 사이트가 실행됩니다.
```bash
npm run dev
```
- 브라우저 주소: `http://localhost:3000`

---

## 📊 2. 데이터 운영 가이드

이 서비스의 핵심은 두 단계의 자동화 파이프라인입니다.

### 2.1 1단계: 상점 데이터 수집 (Data Ingestion)
공공데이터포털 등에서 받은 JSON 파일을 **기본 정보**로 DB에 넣습니다.
```bash
# 사용법: 스크립트 실행 (기본 경로: data/source.json)
npx tsx scripts/ingest-data.ts
```
- **역할**: 수만 개의 상점 위치, 주소, 업종 정보를 고속으로 등록합니다.
- **중복 방지**: 이미 있는 상점(`original_id` 기준)은 정보를 갱신(Update)하고, 없으면 생성(Insert)합니다.

### 2.2 2단계: AI 콘텐츠 생성 (AI Enrichment)
등록된 상점 중 설명을 아직 갖지 못한 곳을 찾아 AI가 글을 써줍니다.
```bash
npx tsx scripts/generate-content.ts
```
- **역할**: Gemini Pro가 상점의 위치와 업종을 분석해 **4줄 소개글**과 **FAQ 5개**를 생성합니다.
- **비용 관리**: 한 번에 10개씩(코드 설정값) 처리하여 API 비용 폭탄을 방지합니다.

---

## 📈 3. SEO 및 성과 관리

### 3.1 검색 엔진 최적화 (SEO) 구조
- **동적 URL**: `/[지역]/[카테고리]/[상점명]/[ID]` 구조로, 검색어가 URL에 자연스럽게 포함됩니다.
- **구조화된 데이터 (Schema Markup)**: Google 지도가 상점 정보를 이해하도록 `LocalBusiness` 태그가 자동 적용됩니다.
- **ISR (Incremental Static Regeneration)**: 페이지를 미리 만들어두지만, 데이터가 바뀌면(예: AI 글 생성 후) 자동으로 화면을 업데이트합니다.

### 3.2 핵심 지표 관리
- **Supabase Dashboard**: 데이터가 잘 들어오는지 테이블(`stores_detail`)을 가끔 확인해주세요.
- **Google Search Console**: 사이트 배포 후 등록하여 `sitemap.xml` 제출이 필요합니다.

---

## 🤖 4. 자동화 (GitHub Actions)
매주 월요일 새벽, GitHub 서버가 자동으로 위 1, 2단계 스크립트를 실행합니다.
- 설정 파일: `.github/workflows/data-pipeline.yml`
- **주의**: GitHub 저장소의 `Settings > Secrets`에 위 환경 변수들이 등록되어 있어야 작동합니다.

---

## 💡 5. 문제 해결 (Troubleshooting)

**Q. 페이지가 404가 떠요.**
A. DB에 해당 ID의 상점이 없거나, 아직 AI 콘텐츠가 생성되지 않아 기본 정보만 있는 상태일 수 있습니다. 2단계 스크립트를 실행해보세요.

**Q. AI 생성이 멈췄어요.**
A. Gemini API 무료 사용량 제한일 수 있습니다. 잠시 기다렸다가 다시 실행하거나, 유료 플랜 설정을 확인하세요.

---

*문서 최종 업데이트: 2025-12-10*
