import { SEO } from '../../components/layout/SEO';
import { Link } from 'react-router-dom';

export const VatExplained = () => {
    return (
        <article className="guide-article">
            <SEO
                title="부가세 계산 완벽 가이드 (2025)"
                description="일반과세자와 간이과세자의 차이점부터 부가세 10% 계산 공식까지, 사업자가 꼭 알아야 할 부가가치세의 모든 것을 정리했습니다."
                keywords="부가세 계산 방법, 부가가치세 10%, 일반과세자 간이과세자 차이, VAT 계산 공식"
            />

            <h1>부가세(VAT) 계산 완벽 가이드: 사장님이 꼭 알아야 할 3가지</h1>
            <p className="text-lg text-sub font-medium">
                사업을 시작하면 가장 먼저 마주하는 세금, 부가가치세.
                "어? 내가 번 돈에서 왜 10%를 떼어내야 하지?"라고 당황하지 않도록,
                2025년 기준 부가세의 핵심 개념과 계산법을 정리해 드립니다.
            </p>

            <div className="guide-callout">
                <strong>💡 3줄 요약</strong>
                <ul className="list-disc pl-4 mt-2">
                    <li>부가세는 내 돈이 아니라 <strong>'소비자가 잠시 맡겨둔 세금'</strong>입니다.</li>
                    <li>일반과세자는 10%, 간이과세자는 1.5%~4% 수준의 낮은 세율을 적용받습니다.</li>
                    <li>매입세액 공제를 꼼꼼히 챙겨야 납부 세액을 줄일 수 있습니다.</li>
                </ul>
            </div>

            <h2>1. 부가세 별도 vs 부가세 포함</h2>
            <p>
                견적서를 작성하거나 물건을 살 때 가장 헷갈리는 부분입니다.
            </p>
            <ul>
                <li><strong>부가세 별도 (공급가액):</strong> 물건의 순수 가격입니다. 기업 간 거래(B2B)에서 주로 사용합니다.</li>
                <li><strong>부가세 포함 (공급대가):</strong> 소비자가 실제로 결제하는 금액입니다. 소매점이나 음식점에서는 이 가격을 표기합니다.</li>
            </ul>
            <p>
                예를 들어, 110,000원짜리 물건을 팔았다면?
                <br />
                내 매출(공급가액)은 100,000원이고, 10,000원은 국세청에 낼 세금(부가세)입니다.
            </p>

            <h2>2. 일반과세자 vs 간이과세자</h2>
            <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse border border-border">
                    <thead className="bg-bg-page">
                        <tr>
                            <th className="border border-border p-2">구분</th>
                            <th className="border border-border p-2">일반과세자</th>
                            <th className="border border-border p-2">간이과세자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-border p-2 font-bold">연 매출 기준</td>
                            <td className="border border-border p-2">1억 400만원 이상<br />(또는 본인 선택)</td>
                            <td className="border border-border p-2">1억 400만원 미만</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2 font-bold">세율</td>
                            <td className="border border-border p-2">10%</td>
                            <td className="border border-border p-2">1.5% ~ 4% (업종별 상이)</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2 font-bold">세금계산서</td>
                            <td className="border border-border p-2">발급 의무</td>
                            <td className="border border-border p-2">4,800만원 이상만 발급</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>3. 부가세 계산 공식</h2>
            <p>직접 계산하기 머리 아프시죠? 기본 공식은 이렇습니다.</p>

            <div className="bg-bg-page p-4 rounded-md my-4 font-mono text-sm">
                납부세액 = 매출세액(매출액 × 10%) - 매입세액(매입액 × 10%)
            </div>

            <p>
                예를 들어, 매출이 3,000만원이고 매입(비용)이 1,000만원이라면?
                <br />
                (3000 × 10%) - (1000 × 10%) = <strong>200만원</strong>을 납부하게 됩니다.
            </p>

            <div className="mt-8 p-6 bg-primary-light/5 text-center rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-2">지금 바로 내 부가세 계산해보기</h3>
                <p className="mb-4 text-text-sub">복잡한 공식 없이, 숫자만 입력하면 1초 만에 계산됩니다.</p>
                <Link to="/vat-calculator" className="btn btn-primary inline-flex items-center gap-2">
                    <span className="text-lg">🧮</span> 부가세 계산기 바로가기
                </Link>
            </div>
        </article>
    );
};
