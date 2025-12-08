import { Link } from 'react-router-dom';
import { SEO } from '../components/layout/SEO';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export const Home = () => {
    return (
        <>
            <SEO
                title="무료 비즈니스 계산기 모음"
                description="부가세, 마진율, 연봉 실수령액 등 사업자와 프리랜서를 위한 필수 무료 계산기. 쉽고 정확하게 계산하세요."
                keywords="부가세 계산기, 마진 계산기, 연봉 계산기, 무료 계산기"
            />

            <div className="container section">
                <div className="hero">
                    <h1 className="hero__title">
                        비즈니스 계산이 <span className="highlight">쉬워집니다</span>
                    </h1>
                    <p className="hero__subtitle">
                        복잡한 세금, 마진, 급여 계산을 3초 만에 해결하세요.<br className="mobile-only" />
                        별도 설치 없이 웹에서 바로 사용 가능합니다.
                    </p>
                </div>

                <div className="tools-grid">
                    <Link to="/vat-calculator" className="tool-card card">
                        <div className="tool-card__icon">
                            <Calculator size={32} />
                        </div>
                        <h2 className="tool-card__title">부가세 계산기</h2>
                        <p className="tool-card__desc">
                            공급가액/합계금액 기준 부가세(VAT) 자동 계산.<br />
                            세금계산서 발행 전 필수 체크.
                        </p>
                        <span className="btn btn-primary btn-full">계산하기</span>
                    </Link>

                    <Link to="/margin-calculator" className="tool-card card">
                        <div className="tool-card__icon">
                            <TrendingUp size={32} />
                        </div>
                        <h2 className="tool-card__title">마진율 계산기</h2>
                        <p className="tool-card__desc">
                            매입가와 판매가를 입력하여 마진율과 이익금 확인.<br />
                            손익분기점 파악에 최적화.
                        </p>
                        <span className="btn btn-primary btn-full">계산하기</span>
                    </Link>

                    <Link to="/salary-calculator" className="tool-card card">
                        <div className="tool-card__icon">
                            <DollarSign size={32} />
                        </div>
                        <h2 className="tool-card__title">연봉 실수령액</h2>
                        <p className="tool-card__desc">
                            2025년 기준 4대보험 및 소득세 공제 후<br />
                            실제 수령액을 정확하게 계산.
                        </p>
                        <span className="btn btn-primary btn-full">계산하기</span>
                    </Link>
                </div>
            </div>

            <style>{`
        .hero {
          text-align: center;
          padding: var(--space-12) 0;
          margin-bottom: var(--space-8);
        }
        .hero__title {
          font-size: var(--text-3xl);
          margin-bottom: var(--space-4);
          word-break: keep-all;
        }
        .highlight {
          color: var(--secondary);
        }
        .hero__subtitle {
          color: var(--text-sub);
          font-size: var(--text-lg);
          max-width: 600px;
          margin: 0 auto;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-8);
        }

        .tool-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none; /* Link reset */
          color: inherit;
        }
        .tool-card:hover .tool-card__title {
          color: var(--secondary);
        }
        .tool-card__icon {
          width: 64px;
          height: 64px;
          background: var(--bg-page);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          margin-bottom: var(--space-4);
        }
        .tool-card__title {
          font-size: var(--text-xl);
          transition: color 0.2s;
        }
        .tool-card__desc {
          color: var(--text-sub);
          margin-bottom: var(--space-6);
          font-size: var(--text-sm);
        }
        
        @media (min-width: 768px) {
          .hero__title { font-size: 2.5rem; }
        }
      `}</style>
        </>
    );
};
