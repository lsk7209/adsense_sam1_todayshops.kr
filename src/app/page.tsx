import Link from 'next/link';
import { MapPin, Sparkles, Search, ArrowRight, Store, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Store className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">오늘의매장</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">홈</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">서비스 소개</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">문의하기</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100 uppercase tracking-wide">
            <Sparkles className="w-3 h-3" />
            AI Powered Local Discovery
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            우리 동네 숨은 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">진짜 핫플레이스</span><br />
            AI가 찾아드립니다.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            공공데이터의 정확성과 제너레이티브 AI의 통찰력을 결합했습니다.<br className="hidden md:block" />
            단순한 위치 정보를 넘어, 당신이 찾는 매장의 진짜 이야기를 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/Food/Seoul/Korean/10001" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              매장 체험하기
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
              더 알아보기
            </Link>
          </div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">고속 데이터 파이프라인</h3>
              <p className="text-slate-600 leading-relaxed">
                공공데이터포털의 방대한 상권 정보를 실시간으로 수집하고 분류합니다. 수만 개의 최신 매장 정보를 가장 빠르게 만나보세요.
              </p>
            </div>
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <Sparkles className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gemini AI 콘텐츠</h3>
              <p className="text-slate-600 leading-relaxed">
                구글의 최신 AI 모델이 각 매장의 특성을 분석하여, 고객들이 궁금해하는 FAQ와 매력적인 소개글을 자동으로 생성합니다.
              </p>
            </div>
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <ShieldCheck className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SEO 최적화 아키텍처</h3>
              <p className="text-slate-600 leading-relaxed">
                검색 엔진이 사랑하는 구조로 설계되었습니다. Next.js의 ISR 기술과 구조화된 데이터로 더 많은 고객에게 노출됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 시작해보세요</h2>
          <p className="text-slate-300 mb-10 text-lg max-w-xl mx-auto">
            개발자를 위한 데모 페이지가 준비되어 있습니다. <br />
            데이터베이스에 실제 데이터가 있다면 즉시 확인 가능합니다.
          </p>
          <Link href="/Food/Seoul/Korean/10001" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-lg group">
            데모 페이지 보기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-slate-600" />
              <span className="font-semibold text-slate-200">오늘의매장</span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link href="/contact" className="hover:text-white transition-colors">문의하기</Link>
              <span className="opacity-50">&copy; 2025 TodayShop Team.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
