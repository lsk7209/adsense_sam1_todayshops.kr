export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__col">
                        <h3 className="footer__title">BizCalc Pro</h3>
                        <p className="footer__desc">
                            사업자와 프리랜서를 위한 필수 비즈니스 계산기 모음.
                            쉽고 정확한 계산을 도와드립니다.
                        </p>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__subtitle">Tools</h4>
                        <a href="/vat-calculator" className="footer__link">부가세 계산기</a>
                        <a href="/margin-calculator" className="footer__link">마진 계산기</a>
                        <a href="/salary-calculator" className="footer__link">연봉 계산기</a>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__subtitle">Legal</h4>
                        <a href="/about" className="footer__link">소개</a>
                        <a href="/privacy" className="footer__link">개인정보처리방침</a>
                        <a href="/contact" className="footer__link">문의하기</a>
                    </div>
                </div>
                <div className="footer__bottom">
                    &copy; {new Date().getFullYear()} BizCalc Pro. All rights reserved.
                </div>
            </div>

            <style>{`
        .footer {
          background: var(--primary);
          color: var(--text-inverse);
          padding: var(--space-12) 0 var(--space-6);
          margin-top: auto;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-8);
          margin-bottom: var(--space-8);
        }
        .footer__title {
          color: var(--text-inverse);
          margin-bottom: var(--space-4);
        }
        .footer__desc {
          color: var(--text-muted);
          font-size: var(--text-sm);
        }
        .footer__subtitle {
          color: var(--text-inverse);
          margin-bottom: var(--space-4);
          font-size: var(--text-base);
        }
        .footer__link {
          display: block;
          color: var(--text-muted);
          margin-bottom: var(--space-2);
          transition: color 0.2s;
        }
        .footer__link:hover {
          color: var(--secondary);
        }
        .footer__bottom {
          border-top: 1px solid #334155;
          padding-top: var(--space-6);
          text-align: center;
          color: var(--text-muted);
          font-size: var(--text-sm);
        }
      `}</style>
        </footer>
    );
};
