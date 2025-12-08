import { SEO } from '../../components/layout/SEO';
import { Link } from 'react-router-dom';

export const TaxpayerTypeGuide = () => {
    return (
        <article className="guide-article">
            <SEO
                title="일반과세자 vs 간이과세자 차이점 비교 (2025 사업자 등록 필독)"
                description="사업자 등록 전 필수 고민! 일반과세자와 간이과세자의 차이점(세율, 세금계산서, 부가세 신고)을 완벽 비교해 드립니다. 나에게 유리한 유형을 찾아보세요."
                keywords="일반과세자 간이과세자 차이, 사업자등록 유형, 부가세율 비교, 간이과세자 기준, 2025 사업자 세금"
            />

            <h1>일반과세자 vs 간이과세자: 나에게 유리한 유형은?</h1>
            <p className="intro">
                사업자 등록증을 신청할 때 가장 먼저 마주하는 난관, 바로 **과세 유형 선택**입니다.
                "처음엔 무조건 간이가 좋다던데?"라는 말만 믿고 덜컥 등록했다가 세금 폭탄을 맞거나 거래를 놓칠 수도 있습니다.
                내 사업 상황에 딱 맞는 유형이 무엇인지 명쾌하게 비교해 드립니다.
            </p>

            <div className="content-block">
                <h3>⚖️ 한눈에 보는 비교표</h3>
                <div className="overflow-x-auto">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>일반과세자</th>
                                <th>간이과세자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>연 매출 기준</strong></td>
                                <td>8,000만 원 이상<br />(또는 초기 신청)</td>
                                <td>8,000만 원 미만</td>
                            </tr>
                            <tr>
                                <td><strong>부가가치세율</strong></td>
                                <td>10%</td>
                                <td>1.5% ~ 4%<br />(업종별 부가가치율 적용)</td>
                            </tr>
                            <tr>
                                <td><strong>세금계산서</strong></td>
                                <td>발행 가능 (의무)</td>
                                <td>
                                    4,800만 원 미만: 발행 불가<br />
                                    4,800만 원 이상: 발행 가능
                                </td>
                            </tr>
                            <tr>
                                <td><strong>매입세액 공제</strong></td>
                                <td>전액 공제 가능</td>
                                <td>일부만 공제 (0.5% 등)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="content-block">
                <h3>👍 간이과세자가 유리한 경우</h3>
                <ul>
                    <li><strong>소비자 대상(B2C) 업종</strong>: 음식점, 카페, 미용실 등 최종 소비자를 상대하는 경우, 낮은 부가세율(1.5~4%)이 절대적으로 유리합니다.</li>
                    <li><strong>초기 투자 비용이 적은 경우</strong>: 매입세액 공제를 많이 받을 일이 없다면, 매출 세금을 적게 내는 것이 이득입니다.</li>
                    <li><strong>연 매출 4,800만 원 미만 예상</strong>: 부가세 납부 의무가 면제됩니다! (신고는 해야 함)</li>
                </ul>
            </div>

            <div className="content-block">
                <h3>👍 일반과세자가 유리한 경우</h3>
                <ul>
                    <li><strong>기업 대상(B2B) 업종</strong>: 거래처에서 **세금계산서**를 요구하는 경우가 많으므로 일반과세자가 필수적일 수 있습니다.</li>
                    <li><strong>초기 투자 비용이 큰 경우</strong>: 인테리어, 설비 구입 등으로 큰돈을 썼다면, 10%를 환급받을 수 있는 일반과세자가 훨씬 유리합니다.</li>
                    <li><strong>손실 발생 예상</strong>: 적자가 나도 부가세는 내야 하는 간이과세자와 달리, 일반과세자는 환급을 받을 수 있습니다.</li>
                </ul>
            </div>

            <div className="content-block">
                <h3>🔄 유형 전환이 가능한가요?</h3>
                <p>
                    네, 가능합니다.
                    간이과세자로 시작했어도 연 매출이 8,000만 원을 넘으면 다음 해 7월 1일부터 **자동으로 일반과세자로 전환**됩니다.
                    반대로 매출이 줄어들면 간이과세자로 전환될 수 있습니다. (단, 배제 업종 등 제외)
                </p>
            </div>

            <div className="guide-promo-box">
                <h4>부가세 계산이 어려우신가요?</h4>
                <p>일반/간이 유형별 예상 부가세를 미리 계산해 보세요.</p>
                <Link to="/vat-calculator" className="btn btn-primary">부가세 계산기 바로가기</Link>
            </div>

            <style>{`
                .comparison-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: var(--space-4);
                    font-size: var(--text-sm);
                }
                .comparison-table th {
                    background: var(--bg-page);
                    padding: var(--space-3);
                    border: 1px solid var(--border-color);
                    text-align: center;
                    color: var(--primary);
                }
                .comparison-table td {
                    padding: var(--space-3);
                    border: 1px solid var(--border-color);
                    text-align: center;
                    color: var(--text-sub);
                    line-height: 1.5;
                }
                .comparison-table tr:nth-child(even) {
                    background: #F8FAFC;
                }
            `}</style>
        </article>
    );
};
