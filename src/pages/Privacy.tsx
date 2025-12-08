import { SEO } from '../components/layout/SEO';

export const Privacy = () => {
    return (
        <>
            <SEO
                title="개인정보처리방침"
                description="BizCalc Pro의 개인정보처리방침입니다. 우리는 사용자의 데이터를 서버에 저장하지 않습니다."
            />
            <div className="container section">
                <article className="card content-article">
                    <h1>개인정보처리방침</h1>
                    <p className="date">시행일자: {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일</p>

                    <div className="content-block">
                        <h3>1. 개인정보의 수집 및 이용 목적</h3>
                        <p>
                            **BizCalc Pro**("본 사이트")는 별도의 회원가입 기능을 제공하지 않으며,
                            사용자의 어떠한 개인정보(이름, 연락처, 이메일 등)도 서버에 수집하거나 저장하지 않습니다.
                        </p>
                    </div>

                    <div className="content-block">
                        <h3>2. 쿠키(Cookie) 및 데이터 저장</h3>
                        <p>
                            본 사이트는 사용자의 편의를 위해 브라우저의 **로컬 스토리지(Local Storage)** 기능을 활용할 수 있습니다.
                            이는 사용자의 기기 내 브라우저에만 저장되며, 서버로 전송되지 않습니다.
                            또한 Google AdSense 및 Google Analytics와 같은 제3자 서비스가 방문 통계 분석 및 맞춤형 광고 제공을 위해 쿠키를 사용할 수 있습니다.
                        </p>
                    </div>

                    <div className="content-block">
                        <h3>3. 제3자 서비스 이용</h3>
                        <p>
                            본 사이트는 서비스 운영을 위해 다음과 같은 외부 서비스를 이용합니다:
                        </p>
                        <ul>
                            <li><b>Google Analytics</b>: 웹사이트 트래픽 분석</li>
                            <li><b>Google AdSense</b>: 문맥 기반 및 맞춤형 광고 송출</li>
                        </ul>
                    </div>
                </article>
            </div>
            <style>{`
        .date {
          color: var(--text-muted);
          margin-bottom: var(--space-8);
          font-size: var(--text-sm);
        }
        .content-article {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-8);
        }
        .content-article h1 { margin-bottom: var(--space-4); }
        .content-article h3 { margin-top: var(--space-8); margin-bottom: var(--space-4); font-size: var(--text-lg); }
        .content-block p, .content-block ul { color: var(--text-sub); line-height: 1.7; }
      `}</style>
        </>
    );
};
