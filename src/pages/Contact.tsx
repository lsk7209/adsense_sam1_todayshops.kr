import { SEO } from '../components/layout/SEO';
import { Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <>
            <SEO
                title="문의하기"
                description="BizCalc Pro에 바라는 점이나 제휴 문의를 남겨주세요."
            />
            <div className="container section">
                <article className="card content-article">
                    <h1>문의하기</h1>
                    <p className="intro">
                        서비스 이용 중 불편한 점이나 제안하고 싶은 기능이 있으신가요?<br />
                        아래 이메일로 연락주시면 빠르게 답변 드리겠습니다.
                    </p>

                    <div className="contact-box">
                        <Mail className="contact-icon" size={48} />
                        <h3>비즈니스/제휴/오류 제보</h3>
                        <a href="mailto:support@bizcalc.pro" className="email-link">support@bizcalc.pro</a>
                        <p className="note">
                            * 답변은 평일 기준 24시간 이내에 드리고 있습니다.
                        </p>
                    </div>
                </article>
            </div>
            <style>{`
        .contact-box {
          text-align: center;
          background: var(--bg-page);
          padding: var(--space-8);
          border-radius: var(--radius-lg);
          margin-top: var(--space-8);
        }
        .contact-icon {
          color: var(--secondary);
          margin-bottom: var(--space-4);
        }
        .email-link {
          display: inline-block;
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--primary);
          margin: var(--space-4) 0;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .email-link:hover {
          color: var(--secondary);
        }
        .note {
          color: var(--text-muted);
          font-size: var(--text-sm);
        }
      `}</style>
        </>
    );
};
