import { SEO } from '../components/layout/SEO';

export const About = () => {
    return (
        <>
            <SEO
                title="서비스 소개"
                description="BizCalc Pro는 사업자와 프리랜서를 위해 개발된 무료 비즈니스 계산기 서비스입니다. 복잡한 세무, 회계 계산을 웹에서 간편하게 해결하세요."
            />
            <div className="container section">
                <article className="card content-article">
                    <h1>BizCalc Pro 소개</h1>
                    <p className="intro">
                        **BizCalc Pro**는 대한민국의 소상공인, 1인 사업자, 프리랜서들이 겪는
                        세무 및 회계 계산의 어려움을 해결하기 위해 만들어진 **무료 웹 도구**입니다.
                    </p>

                    <div className="content-block">
                        <h3>🎯 우리의 목표</h3>
                        <p>
                            "세무사에게 물어보기엔 사소하고, 직접 계산하기엔 복잡한 문제들."<br />
                            우리는 이러한 비즈니스 현장의 작은 걸림돌들을 기술로 해결합니다.
                            별도의 프로그램 설치나 회원가입 없이, 웹 브라우저만 있다면 누구나 즉시 사용할 수 있습니다.
                        </p>
                    </div>

                    <div className="content-block">
                        <h3>🛠 제공하는 도구</h3>
                        <ul>
                            <li><b>부가세 계산기</b>: 합계금액과 공급가액을 자유롭게 변환하고 세액을 산출합니다.</li>
                            <li><b>마진율 계산기</b>: 매입/매출 데이터를 기반으로 정확한 이익률과 마크업을 분석합니다.</li>
                            <li><b>연봉 실수령액 계산기</b>: 최신 4대보험 요율과 간이세액표를 반영하여 실소득을 예측합니다.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>🚀 업데이트 계획</h3>
                        <p>
                            사용자 여러분의 피드백을 바탕으로, 프리랜서 종합소득세 계산기,
                            퇴직금 계산기, 주휴수당 계산기 등 다양한 도구를 지속적으로 추가할 예정입니다.
                        </p>
                    </div>
                </article>
            </div>
            <style>{`
        .intro {
          font-size: var(--text-lg);
          color: var(--text-sub);
          margin-bottom: var(--space-8);
          line-height: 1.7;
        }
        .content-article {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-8);
        }
        .content-article h1 { margin-bottom: var(--space-6); }
        .content-article h3 { margin-top: var(--space-8); margin-bottom: var(--space-4); color: var(--primary); }
        .content-article ul { padding-left: 20px; color: var(--text-sub); line-height: 1.8; }
      `}</style>
        </>
    );
};
