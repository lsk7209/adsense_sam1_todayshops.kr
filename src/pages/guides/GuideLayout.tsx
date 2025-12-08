import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

export const GuideLayout = () => {
    const location = useLocation();

    const guides = [
        { path: '/guides/vat-explained', title: '부가세 계산 완벽 가이드 (2025)', icon: '📊' },
        { path: '/guides/margin-vs-markup', title: '마진율 vs 마크업: 사장님 필수 상식', icon: '📈' },
        { path: '/guides/2025-salary-table', title: '2025년 연봉 실수령액표 & 세금 공제', icon: '💰' },
        { path: '/guides/freelance-tax-guide', title: '프리랜서 종합소득세 신고 가이드', icon: '📝' },
        { path: '/guides/holiday-allowance-guide', title: '주휴수당 지급 기준 & 계산법', icon: '🏖️' },
        { path: '/guides/taxpayer-type-guide', title: '일반과세자 vs 간이과세자 비교', icon: '⚖️' },
    ];

    return (
        <div className="container guide-layout">
            <aside className="guide-sidebar">
                <div className="guide-sidebar__header">
                    <BookOpen size={24} className="text-secondary" />
                    <h3>비즈니스 지식 센터</h3>
                </div>
                <nav className="guide-nav">
                    {guides.map((guide) => (
                        <Link
                            key={guide.path}
                            to={guide.path}
                            className={`guide-nav__item ${location.pathname === guide.path ? 'active' : ''}`}
                        >
                            <span className="guide-nav__icon">{guide.icon}</span>
                            <span className="guide-nav__text">{guide.title}</span>
                            {location.pathname === guide.path && <ChevronRight size={16} className="guide-nav__arrow" />}
                        </Link>
                    ))}
                </nav>

                <div className="guide-promo">
                    <h4>계산기가 필요하신가요?</h4>
                    <p>복잡한 계산은 BizCalc Pro에 맡기세요.</p>
                    <Link to="/" className="btn btn-primary btn-sm">계산기 전체보기</Link>
                </div>
            </aside>

            <main className="guide-content">
                <Outlet />
            </main>

            <style>{`
                .guide-layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: var(--space-8);
                    padding-top: var(--space-8);
                    padding-bottom: var(--space-12);
                    align-items: start;
                }

                @media (max-width: 768px) {
                    .guide-layout {
                        grid-template-columns: 1fr;
                        gap: var(--space-6);
                    }
                }

                .guide-sidebar {
                    background: var(--bg-card);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-lg);
                    padding: var(--space-4);
                    position: sticky;
                    top: calc(var(--navbar-height) + var(--space-4));
                }

                .guide-sidebar__header {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    padding-bottom: var(--space-4);
                    border-bottom: 1px solid var(--border-color);
                    margin-bottom: var(--space-4);
                    color: var(--primary);
                }

                .guide-nav {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-2);
                }

                .guide-nav__item {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3);
                    padding: var(--space-3);
                    border-radius: var(--radius-md);
                    color: var(--text-sub);
                    font-weight: 500;
                    transition: all 0.2s;
                }

                .guide-nav__item:hover {
                    background: var(--bg-page);
                    color: var(--primary);
                }

                .guide-nav__item.active {
                    background: var(--primary-light);
                    color: var(--text-inverse);
                }

                .guide-nav__arrow {
                    margin-left: auto;
                }

                .guide-promo {
                    margin-top: var(--space-6);
                    padding: var(--space-4);
                    background: var(--bg-page);
                    border-radius: var(--radius-md);
                    text-align: center;
                }
                .guide-promo h4 {
                    font-size: var(--text-sm);
                    color: var(--primary);
                    margin-bottom: var(--space-2);
                }
                .guide-promo p {
                    font-size: var(--text-xs);
                    color: var(--text-muted);
                    margin-bottom: var(--space-3);
                }

                .guide-content {
                    background: var(--bg-card);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-lg);
                    padding: var(--space-8);
                    min-height: 500px;
                }

                /* Typography for Guides */
                .guide-article h1 { font-size: var(--text-3xl); margin-bottom: var(--space-4); color: var(--primary); }
                .guide-article h2 { font-size: var(--text-xl); margin-top: var(--space-8); margin-bottom: var(--space-4); color: var(--primary); border-left: 4px solid var(--secondary); padding-left: var(--space-3); }
                .guide-article h3 { font-size: var(--text-lg); margin-top: var(--space-6); margin-bottom: var(--space-3); color: var(--text-main); }
                .guide-article p { line-height: 1.8; color: var(--text-sub); margin-bottom: var(--space-4); }
                .guide-article ul, .guide-article ol { margin-bottom: var(--space-4); padding-left: var(--space-6); color: var(--text-sub); line-height: 1.7; }
                .guide-article li { margin-bottom: var(--space-2); }
                
                .guide-callout {
                    background: #FFFBEB;
                    border-left: 4px solid var(--secondary);
                    padding: var(--space-4);
                    margin: var(--space-6) 0;
                    border-radius: 0 var(--radius-md) var(--radius-md) 0;
                }
            `}</style>
        </div>
    );
};
