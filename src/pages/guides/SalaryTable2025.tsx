import { SEO } from '../../components/layout/SEO';
import { Link } from 'react-router-dom';

export const SalaryTable2025 = () => {
    return (
        <article className="guide-article">
            <SEO
                title="2025년 연봉 실수령액표 (최신 4대보험 요율 반영)"
                description="2025년 최신 4대보험 요율과 소득세 간이세액표를 반영한 연봉별 실수령액 정리. 내 월급이 실제로 얼마인지 확인해보세요."
                keywords="2025 연봉 실수령액표, 4대보험 계산, 연봉 3000 실수령액, 연봉 5000 실수령액, 월급 계산기"
            />

            <h1>2025년 연봉 실수령액표: 내 통장에 꽂히는 진짜 금액</h1>
            <p className="text-lg text-sub font-medium">
                "연봉 4,000만원이면 한 달에 얼마 받나요?"
                단순히 나누기 12를 하면 큰 오차가 발생합니다.
                국민연금, 건강보험 등 4대보험과 세금을 뗀 '실수령액'이 중요하기 때문입니다.
            </p>

            <h2>1. 2025년 4대보험 요율 (근로자 부담분)</h2>
            <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse border border-border">
                    <thead className="bg-bg-page">
                        <tr>
                            <th className="border border-border p-2">항목</th>
                            <th className="border border-border p-2">요율</th>
                            <th className="border border-border p-2">비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-border p-2 font-bold">국민연금</td>
                            <td className="border border-border p-2">4.5%</td>
                            <td className="border border-border p-2">상한액 존재</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2 font-bold">건강보험</td>
                            <td className="border border-border p-2">3.545%</td>
                            <td className="border border-border p-2">전년 대비 동결/인상 변동 확인 필요</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2 font-bold">장기요양</td>
                            <td className="border border-border p-2">건보료의 12.95%</td>
                            <td className="border border-border p-2">건강보험료 기준</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2 font-bold">고용보험</td>
                            <td className="border border-border p-2">0.9%</td>
                            <td className="border border-border p-2">실업급여 재원</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>2. 주요 연봉별 예상 실수령액</h2>
            <p>※ 부양가족 1인(본인), 비과세 식대 20만원 기준 대략적인 금액입니다.</p>

            <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse border border-border text-center">
                    <thead className="bg-primary text-text-inverse">
                        <tr>
                            <th className="border border-primary-light p-3">연봉</th>
                            <th className="border border-primary-light p-3">월 실수령액 (예상)</th>
                            <th className="border border-primary-light p-3">공제총액 (월)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-bg-page transition-colors">
                            <td className="border border-border p-3 font-bold">3,000만원</td>
                            <td className="border border-border p-3 text-secondary font-bold">2,236,130원</td>
                            <td className="border border-border p-3">263,870원</td>
                        </tr>
                        <tr className="hover:bg-bg-page transition-colors">
                            <td className="border border-border p-3 font-bold">4,000만원</td>
                            <td className="border border-border p-3 text-secondary font-bold">2,916,560원</td>
                            <td className="border border-border p-3">416,770원</td>
                        </tr>
                        <tr className="hover:bg-bg-page transition-colors">
                            <td className="border border-border p-3 font-bold">5,000만원</td>
                            <td className="border border-border p-3 text-secondary font-bold">3,568,220원</td>
                            <td className="border border-border p-3">598,440원</td>
                        </tr>
                        <tr className="hover:bg-bg-page transition-colors">
                            <td className="border border-border p-3 font-bold">6,000만원</td>
                            <td className="border border-border p-3 text-secondary font-bold">4,213,950원</td>
                            <td className="border border-border p-3">786,050원</td>
                        </tr>
                        <tr className="hover:bg-bg-page transition-colors">
                            <td className="border border-border p-3 font-bold">1억원</td>
                            <td className="border border-border p-3 text-secondary font-bold">6,654,780원</td>
                            <td className="border border-border p-3">1,678,550원</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="guide-callout">
                <strong>💡 참고하세요</strong>
                <p className="mt-2 text-sm">
                    위 표는 일반적인 기준이며, <strong>부양가족 수, 6세 이하 자녀, 비과세 수당</strong> 등에 따라 실제 금액은 달라집니다.
                    정확한 금액은 연봉 계산기를 통해 확인하는 것이 가장 빠릅니다.
                </p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 text-center rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-2">내 연봉, 정확히 얼마 받을까?</h3>
                <p className="mb-4 text-text-sub">부양가족과 비과세액을 적용한 정확한 실수령액을 확인해보세요.</p>
                <Link to="/salary-calculator" className="btn btn-primary inline-flex items-center gap-2">
                    <span className="text-lg">💰</span> 연봉 계산기 바로가기
                </Link>
            </div>
        </article>
    );
};
